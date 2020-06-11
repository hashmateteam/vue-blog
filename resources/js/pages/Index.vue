// Index.vue

<template>
    <div>
        <nav-bar></nav-bar>
        <transition name="fade">
        <router-view></router-view>
        </transition>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
    import NavigationBar from '../components/NavigationBar.vue';
    import GuestIndex from './guest/Index.vue';
    export default{
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }),
        mounted(){
            this.$nextTick(() => {
                console.log("STORE AUTH OBJECT");
                console.log(this.$store.getters.get_auth);
                this.$router.addRoutes([{
                    name: 'guestindex',
                    path: '/@articles',
                    component: GuestIndex
                }]);
                console.log("MAIN INDEX MOUNTED");
                this.$router.push({ name: 'guestindex' });
                /* after clicking login button
                var authorization = this.$store.getters.get_token;
                if(!authorization){
                    this.$router.push({ path: 'auth-in' });
                }
                */
            });
        },
        methods: {
            authcx(){
                let uri = '/api/authcx';
                this.axios.post(uri, '',this.$store.getters.get_headers).then((response) => {
                    console.log(response);
                    if(response.status === 200){
                        console.log(response);
                    }
                });
            }
        },
        components: {
            'guest-index': GuestIndex,
            'nav-bar'    : NavigationBar
        }
    }
</script>