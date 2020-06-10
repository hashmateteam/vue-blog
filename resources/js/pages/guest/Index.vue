// App.vue

<template>
    <div>
        <media-object v-for="article in articles" v-bind:description="article.description" v-bind:title="article.title" v-bind:key="article.id"></media-object>
        <button v-if="loadmore" @click="load_more()">Load more</button>
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
    import MediaObject from '../../components/MediaObject.vue';
    export default{
        data: () => ({
            csrf     : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            articles : [],
            loadmore : false,
            next_uri : '',
        }),
        mounted(){
            this.$nextTick(() => {
                console.log("GUEST INDEX MOUNTED");
            });
            let uri = '/api/articles';
            this.axios.get(uri).then((response) =>{
                console.log(response);
                if(response.data.current_page < response.data.last_page){
                    this.loadmore = true;
                    this.next_uri = response.data.next_page_url;
                }
                response.data.data.forEach(element => {
                    this.articles.push(element);
                });
                console.log(this.articles);
            });
        },
        methods : {
            load_more(){
                if(this.loadmore){
                    let uri = this.next_uri;
                    this.axios.get(uri).then((response) =>{
                        console.log(response);
                        if(response.data.current_page < response.data.last_page){
                            this.loadmore = true;
                            this.next_uri = response.data.next_page_url;
                        }else{
                            this.loadmore = false;
                        }
                        response.data.data.forEach(element => {
                            this.articles.push(element);
                        });
                        console.log(this.articles);
                    });
                }
            }
        },
        components :{
            'media-object' : MediaObject
        }
    }
</script>