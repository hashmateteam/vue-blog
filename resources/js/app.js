/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//Initialize Vue in window of browser
window.Vue = require('vue');

//Importing basic libraries
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueCookie from 'vue-cookie';

//Use or intitalize the basic libraries
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
//Shared State Veux store
import store from "./store";

//Components
import AuthinWrapper from './interfaces/AuthinWrapper.vue';
import AuthupWrapper from './interfaces/AuthupWrapper.vue';

//Pages
import Index from './pages/Index.vue';

//Declare static-routes
const routes = [
    {
        name: 'authin',
        path: '/auth-in',
        component: AuthinWrapper
    },
    {
        name: 'authup',
        path: '/auth-up',
        component: AuthupWrapper
    },
    {
        name: 'index',
        path: '/',
        component: Index
    }
  ];

  //make VueRouter by routes-array
  const router = new VueRouter({ mode: 'history', routes: routes});
  
  //Initialize the Vue app 
  const app = new Vue(Vue.util.extend({ router , store }, Index)).$mount('#app');

  //getting token from cookies before loading any component
  let token = app.$cookie.get("authentication_token");
    if(token !== null){
        app.$store.dispatch("update_token",String(token));
        console.log("token recieved from cookies");
        console.log(token);
    }