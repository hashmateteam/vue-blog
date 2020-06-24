<template>
    <div>
        <nav-bar v-bind:key="nav_ixd"></nav-bar>
        <div class="az-content pd-y-20">
            <div class="container">
                
                <!--
                <carousel :per-page="1" v-bind:key="corousal_ixd" :autoplay="true" :loop="true">
                    <slide v-for="article in articles" v-bind:key="article.id">
                        <slide-card :object="article"></slide-card>
                    </slide>
                </carousel>
                -->
            
                <div class="az-content-body">
                    <div class="d-flex flex-row justify-content-center mg-b-20">
                        <div class="col-sm-6 col-lg-8 mg-t-20">
                            <card-container :cardlist="articles"></card-container>
                        </div>
                    </div>
                </div>
            </div>
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
    import NavigationBar from '../../components/NavigationBar.vue';
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
            nav_ixd : Math.random(),
        }),
        mounted(){
            this.$nextTick(() => {
                //console.log("GUEST INDEX MOUNTED");
            });
            if(this.$store.getters.get_auth.status){
                
            }
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
                this.scroll ();
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
                        console.log(this.articles);
                    });
                }
            },
            scroll () {
                console.log("scroll is in action");
                window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                if (bottomOfWindow) {
                    console.log("scroll is in action again");
                    this.load_more();
                }
                };
            },
            view_article(username,xid){
                const path = '/articles/@' + username + '/' + xid;
                this.$router.push({ path:path });
            },
        },
        components :{
            'media-object'   : MediaObject,
            'card-container' : CardContainer,
            'slide-card'           : SlideCard,
            'nav-bar'    : NavigationBar
        }
    }
</script>