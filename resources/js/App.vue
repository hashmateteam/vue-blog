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
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            auth: false
        }),
        mounted(){
            this.$nextTick(() => {
                let uri = '/api/users/authstatus';
                this.axios.get(uri).then(response => {
                    console.log(response);
                    this.auth = response.data;
                    if(this.auth){
                        //this.$router.push({ path: 'dashboard' });
                    }else{
                        this.$router.push({ path: 'auth-in' });
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