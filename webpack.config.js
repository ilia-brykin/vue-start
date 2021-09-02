const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

function getRules(mode) {
  const TARGET = process.env.npm_lifecycle_event;
  const RULES = [
    {
      test: /\.js$/,
      enforce: "pre",
      use: [
        {
          loader: "eslint-loader",
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader?sourceMap"
        },
        {
          loader: "sass-loader?sourceMap"
        }
      ],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "/static/[hash].[ext]"
          }
        }
      ]
    },
  ];

  return RULES;
}

const TARGET = process.env.npm_lifecycle_event;
module.exports = (env, options) => {
  return {
    watchOptions: {
      poll: true
    },
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./static/"),
      filename: "bundle.js",
    },
    module: {
      rules: getRules(options.mode),
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    resolve: {

    },
    devServer: {
      historyApiFallback: true
    },
  };
};
