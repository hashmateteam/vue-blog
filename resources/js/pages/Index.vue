// Index.vue

<template>
    <nav-bar></nav-bar>
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
                this.$router.addRoutes([{
                    name: 'guestindex',
                    path: '/',
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
        components: {
            'guest-index': GuestIndex,
            'nav-bar'    : NavigationBar
        }
    }
</script>