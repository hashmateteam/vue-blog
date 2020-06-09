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
    import AuthinWrapper from './components/AuthinWrapper.vue';
    import AuthupWrapper from './components/AuthupWrapper.vue';
    export default{
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            auth  : false,
            token : ''
        }),
        mounted(){
            this.$nextTick(() => {
                let uri = '/api/authcx';
                let config = {
                    headers: {
                        'Authorization' : 'Bearer ' + this.token,
                        'Content-Type' : 'application/x-www-form-urlencoded',
                        'Accept' : 'application/json'
                    }
                }
                this.axios.post(uri,'',config).then(response => {
                    console.log(response);
                }).catch((error) => {
                    if (error.response) {
                        if(error.response.status === 401){
                            this.$router.push({ path: 'auth-in' });
                        }
                    }
                });
            });
        },
        components: {
            'authin-wrapper': AuthinWrapper,
            'authup-wrapper': AuthupWrapper
        }
    }
</script>