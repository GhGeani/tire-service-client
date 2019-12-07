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

const config = {};
let url = 'http://localhost:3000';
config.folder = 'tireshopdev';

if (process.env.NODE_ENV === 'production') {
  url = 'https://tire-backend.herokuapp.com';
  config.folder = 'tireshop';
}
config.url = url;

Vue.prototype.$http = axios;
Vue.prototype.$config = config;

Vue.use(SocialSharing);

import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
