// App.vue

<template>
    <div class="az-content">
        <div class="container">
            <carousel :per-page="1" v-bind:key="corousal_ixd" :autoplay="true" :loop="true">
                <slide v-for="article in articles" v-bind:key="article.id">
                    <slide-card :object="article"></slide-card>
                </slide>
            </carousel>
        </div>
        <div class="container">
            <card-container :cardlist="articles"></card-container>
        </div>
        <div class="d-flex justify-content-center">
            <i class="fas fa-angle-double-down" v-if="loadmore" @click="load_more()"></i>
        </div>
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
    import MediaObject from '../../components/MediaObject';
    import CardContainer from '../../components/CardContainer';
    import SlideCard from "../../components/SlideCard";
    export default{
        data: () => ({
            csrf     : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            articles : [],
            loadmore : false,
            next_uri : '',
            cardlist : [],
            corousal_ixd : 1,
        }),
        mounted(){
            this.$nextTick(() => {
                //console.log("GUEST INDEX MOUNTED");
            });
            let uri = '/api/articles';
            this.axios.get(uri).then((response) =>{
                //console.log(response);
                if(response.data.current_page < response.data.last_page){
                    this.loadmore = true;
                    this.next_uri = response.data.next_page_url;
                }
                response.data.data.forEach(element => {
                    this.articles.push(element);
                });
                //console.log(this.articles);
            });
        },
        methods : {
            load_more(){
                if(this.loadmore){
                    let uri = this.next_uri;
                    this.axios.get(uri).then((response) =>{
                        //console.log(response);
                        if(response.data.current_page < response.data.last_page){
                            this.loadmore = true;
                            this.next_uri = response.data.next_page_url;
                            this.corousal_ixd++;
                        }else{
                            this.loadmore = false;
                            this.corousal_ixd++;
                        }
                        response.data.data.forEach(element => {
                            this.articles.push(element);
                        });
                        //console.log(this.articles);
                    });
                }
            }
        },
        components :{
            'media-object'   : MediaObject,
            'card-container' : CardContainer,
            'slide-card'           : SlideCard
        }
    }
</script>