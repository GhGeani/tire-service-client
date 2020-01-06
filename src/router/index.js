import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Sales from '../views/Sales.vue';
import Contact from '../views/Contact.vue';
import getSale from '../components/sales/getSale.vue';


Vue.use(Router);

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vanzari',
      name: 'Sales',
      component: Sales
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/vanzari/:id',
      name: 'GetSale',
      component: getSale
    }
  ]
});