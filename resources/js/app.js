/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//Initialize Vue in window of browser
window.Vue = require('vue');

//Importing basic libraries
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';
//import VueSocialauth from 'vue-social-auth';
import VueCookie from 'vue-cookie';
import moment from 'moment';
import VueCarousel from 'vue-carousel';
//import editor from 'vue2-medium-editor';
//import MediumEditor from 'medium-editor';


//that how we use external libraries
//Object.defineProperty(Vue.prototype, '$editor', { value: MediumEditor });

//Use or intitalize the basic libraries
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueCarousel);
//Vue.component('editor', { editor });
//Shared State Veux store
import store from "./store/index";

//filters
Vue.filter('format_date', function(value) {
    if (value) {
        return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a');
    }
});
Vue.filter('format_text', function(value) {
    if (value) {
        return value.substr(0, 45);
    }
});

//directive two-ways
Vue.directive('example', {
        twoWay: true,
        bind: function() {
            this.handler = function() {
                // set data back to the vm.
                // If the directive is bound as v-example="a.b.c",
                // this will attempt to set `vm.a.b.c` with the
                // given value.
                this.set(this.el.innerHTML)
            }.bind(this)
            this.el.addEventListener('input', this.handler)
        },
        unbind: function() {
            this.el.removeEventListener('input', this.handler)
        }
    })
    //Pages
import Index from './pages/Index.vue';
/*
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
//const router = new VueRouter({ mode: 'history', routes: routes });
*/
/*
Vue.use(VueSocialauth, {
    providers: {
        github: {
            clientId: '',
            redirectUri: '/auth/github/callback' // Your client app URL
        }
    }
})
*/
//Initialize the Vue app 
const app = new Vue(Vue.util.extend({
    router,
    store
}, Index)).$mount('#app');

//getting token from cookies before loading any component
let token = app.$cookie.get("authentication_token");
if (token !== null) {
    app.$store.dispatch("update_token", String(token));
    app.$store.dispatch("update_auth_user", Object(JSON.parse(app.$cookie.get("auth_user"))));
}