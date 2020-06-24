import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


//Components
const AuthinWrapper = () =>
    import ('../interfaces/AuthinWrapper.vue')
const AuthupWrapper = () =>
    import ('../interfaces/AuthupWrapper.vue')

//Pages
const Index = () =>
    import ('../pages/Index')
const GuestIndex = () =>
    import ('../pages/guest/Index')
const UserIndex = () =>
    import ('../pages/user/Index')
const CreateArticle = () =>
    import ('../pages/user/CreateArticle')
const ViewArticle = () =>
    import ('../pages/guest/ViewArticle')
    //Declare static-routes
    /*
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
    */
export default new VueRouter({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [{
        path: '/',
        redirect: '/@articles',
        name: 'index',
        component: Index,
        children: [{
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
            },
            {
                name: 'viewarticle',
                path: '/articles/@:username/:xid',
                component: ViewArticle
            }
        ]
    }]
}