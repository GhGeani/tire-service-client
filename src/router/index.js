import Vue from 'vue';
import Router from 'vue-router';

import Services from '../views/services/list.vue';
import Sales from '../views/sales/list.vue';

Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Services
    },
    {
      path: '/servicii',
      name: 'Services',
      component: Services
    },
    {
      path: '/vanzari',
      name: 'Sales',
      component: Sales
    }
  ]
});