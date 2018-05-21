var a = {
  "name": "firstapp",
  "description": "A first Vue.js project",
  "version": "1.0.0",
  "author": "Eugene <metanit.com>",
  "scripts": {
    "dev": "webpack-dev-server --hot --open --mode=development", //--mode устанавливает режим 'development' или 'production' https://webpack.js.org/concepts/mode/
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "axios": "^0.18.0",                     // HTTP-клиент
    "vue": "^2.5.16",
    "vue-server-renderer": "^2.5.16",       // "vue-server-renderer" и "vue" должны иметь одинаковые верси
    "vue-router": "^3.0.1",                 // Routing
    "vuex": "^3.0.1"                        // VUEX
  },
  "devDependencies": {
    "bootstrap": "^3.3.7",
    "bootstrap-sass": "^3.3.7",
    "css-loader": "^0.28.11",              // зависимость для "vue-loader"
    "device-detector": "^1.0.2",           // определение устройства
    "jquery": "^3.3.1",
    "node-sass": "^4.7.2",                 // Необходима для компиляции SASS in CSS
    "pug": "^2.0.3",
    "pug-loader": "^2.4.0",
    "sass-loader": "^6.0.6",
    "uglifyjs-webpack-plugin": "^1.2.4",   // для минимизации выходных файлов здесь устанавливается пакет плагина минимизации
    "vue-loader": "^14.2.2",               // Чтобы указать сборщику Webpack, как именно файла с расширением *.vue будут загружаться
    "vue-template-compiler": "^2.5.16",    // зависимость для "vue-loader"
    "webpack": "^4.5.0",                   // для сборки приложения будет использоваться пакет webpack
    "webpack-cli": "^2.0.14",              // Интерфейс командной строки
    "webpack-dev-server": "^3.1.3"         // Чтобы в процессе разработки динамически собирать приложение и запускать его на выполнение
  }
}
