<template>
    <div>
        <nav-bar v-bind:key="nav_ixd"></nav-bar>
        <div class="az-content pd-y-20">
            <div class="container">
                <div class="az-content-body">
                    <div class="d-flex flex-row justify-content-center mg-b-20">
                        <div class="col-sm-10 col-lg-10 mg-t-20">
                            <div class="row row-sm mg-b-20">
                                <article-card :object="article" v-bind:key="article.id" />
                            </div>
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
    import NavigationBar from '../../components/NavigationBar';
    import Article from "../../components/Article";
    export default{
        data: () => ({
            csrf     : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            article : {},
            xid : '',
            nav_ixd : Math.random(),
        }),
        created () {
            this.xid = this.$route.params.xid;
        },
        mounted(){
            this.$nextTick(() => { 
                let uri = '/api/view_article';
                const xhr  = this.$store.getters.get_headers;
                console.log(this.xid);
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article = response.data;
                    if(this.article.is_publish){
                        //this.publish_style = "background-color: #6610f2;color: #fff;";
                    }else{
                        //this.publish_style = "background-color: #969dab;color: #fff;";
                    }
                    if(this.article.image_src != null){
                        //
                    }
                });
            });
        },
        methods : {
            
        },
        components :{
            'nav-bar'    : NavigationBar,
            'article-card' : Article
        }
    }
</script>