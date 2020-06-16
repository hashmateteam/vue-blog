// Index.vue

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
    export default{
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }),
        mounted(){
            this.$nextTick(() => {
                //console.log("STORE AUTH OBJECT");
                //console.log(this.$store.getters.get_auth);
                //const path = `/@articles`;
                //if (this.$route.path !== path) this.$router.push(path)
                //console.log("MAIN INDEX MOUNTED");
                //this.nav_ixd = Math.random();
                //this.$router.push({ name: 'guestindex' });
                /* after clicking login button
                var authorization = this.$store.getters.get_token;
                if(!authorization){
                    this.$router.push({ path: 'auth-in' });
                }
                */
            });
            //this.nav_ixd = Math.random();
        },
        methods: {
            authcx(){
                let uri = '/api/authcx';
                this.axios.post(uri, '',this.$store.getters.get_headers).then((response) => {
                    //console.log(response);
                    if(response.status === 200){
                        //console.log(response);
                    }
                });
            }
        }
    }
</script>