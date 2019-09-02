import Vue from 'vue';
import Router from 'vue-router';

import Services from '../views/services/list.vue';
import Home from '../views/Home.vue';
import Sales from '../views/sales/main.vue';
import Sale from '../views/sales/getSale.vue';
import Contact from '../components/contact.vue';


Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/vanzari/:id',
      name: 'Sale',
      component: Sale
    },
  ]
});