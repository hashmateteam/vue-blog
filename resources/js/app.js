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
import moment from 'moment';
import VueCarousel from 'vue-carousel';

//Use or intitalize the basic libraries
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueCarousel);
//Shared State Veux store
import store from "./store";

//filters
Vue.filter('format_date', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a');
    }
});

//Components
import AuthinWrapper from './interfaces/AuthinWrapper.vue';
import AuthupWrapper from './interfaces/AuthupWrapper.vue';

//Pages
import Index from './pages/Index.vue';
import GuestIndex from './pages/guest/Index.vue';
import UserIndex from './pages/user/Index';
import CreateArticle from './pages/user/CreateArticle';

//Declare static-routes
const routes = [{
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
    },
    {
        name: 'guestindex',
        path: '/@articles',
        component: GuestIndex
    },
    {
        name: 'userindex',
        path: '/u/@:username',
        component: UserIndex
    },
    {
        name: 'createarticle',
        path: '/u/@:username/:xid',
        component: CreateArticle
    }
];

//make VueRouter by routes-array
const router = new VueRouter({ mode: 'history', routes: routes });

//Initialize the Vue app 
const app = new Vue(Vue.util.extend({ router, store }, Index)).$mount('#app');

//getting token from cookies before loading any component
let token = app.$cookie.get("authentication_token");
if (token !== null) {
    app.$store.dispatch("update_token", String(token));
    app.$store.dispatch("update_auth_user", Object(JSON.parse(app.$cookie.get("auth_user"))));
    //console.log("token recieved from cookies");
    //console.log(token);
    //console.log("user object recieved from cookies");
    //console.log(app.$cookie.get("auth_user"));
}