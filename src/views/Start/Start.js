// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      deviceClases: 'no-apple-device no-android-device no-mobile-device'
    }
  },
  methods: {  },
  mounted: function () {
    //window.addEventListener('scroll', this.changeMenu);
    //this.changeMenu();
    //this.checkDevice();
  },
  destroyed () {
    //window.removeEventListener('scroll', this.changeMenu);
  }
}
