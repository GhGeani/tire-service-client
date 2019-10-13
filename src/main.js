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

Vue.prototype.$http = axios;

const config = {};
let url = 'http://localhost:3000';

if (process.env.NODE_ENV === 'production') {
  url = 'https://tire-backend.herokuapp.com';
}
config.url = url;

Vue.prototype.$config = config;

Vue.use(SocialSharing);

import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
