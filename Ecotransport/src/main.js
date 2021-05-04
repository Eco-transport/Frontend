// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, Axios);


export var $hayLogin = false;
export var $nombreGlobal = "";
//export var $r = false;
/*export const rolGlobal = "";



export var hayLogin = new Vue({
  data: {
    hayLogin: false
  }  
}) */



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
