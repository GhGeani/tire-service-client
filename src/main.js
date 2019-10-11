import Vue from 'vue'
import App from './App.vue'
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import SocialSharing  from 'vue-social-sharing';

import axios from 'axios';
import config from './utils/config'

Vue.prototype.$http = axios;
Vue.prototype.$config = config;

Vue.use(SocialSharing);

import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
