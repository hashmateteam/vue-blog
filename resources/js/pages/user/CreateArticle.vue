<template>
    <div>{{ article.title }} {{ article.description }}</div>
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
    export default {
        data : ()=>({
            article:{},
            xid : ''
        }),
        created () {
            this.xid = this.$route.params.xid;
        },
        mounted() {
            this.$nextTick(() => { 
                let uri = '/api/get_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article = response.data;
                });
            });
            console.log('create_article with x_id '+this.xid+' mounted.');
        }
    }
</script>