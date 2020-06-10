// App.vue

<template>
    <transition name="fade">
        <router-view></router-view>
    </transition>
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
    import GuestIndex from './guest/Index.vue';
    export default{
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }),
        mounted(){
            this.$nextTick(() => {
                console.log("MAIN INDEX MOUNTED");
                //this.$router.push({ component: GuestIndex });
                /* after clicking login button
                var authorization = this.$store.getters.get_token;
                if(!authorization){
                    this.$router.push({ path: 'auth-in' });
                }
                */
            });
        },
        components: {
            'guest-index': GuestIndex
        }
    }
</script>