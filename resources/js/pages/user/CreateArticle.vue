<template>
    <div>
        <nav-bar v-bind:key="nav_ixd" :article_state="article_status"></nav-bar>
        <div class="az-content">
            <div class="container">
                <div class = "article">
                    <div class="h1heading">
                        <div class="input_wrapper">
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter your post Title"
                            />
                        </div>
                    </div>
                </div>
                <!--
                <div class="row row-sm">
                    
                    <h1  class="col-12" contenteditable="true" v-focus="true" @focusout="title_update($event)"  v-html="article.title" style="color:#000"> {{ (article.title == '') ? ' Title...' : article.title }} </h1>  
                    <hr>
                    <h3  class="col-12" contenteditable="true" v-focus="false" @focusout="description_update($event)"  v-html="article.description" style="color:#000"> {{ (article.description === null || article.description === '') ? ' Description...' : article.description }} </h3>  
                </div>
                -->
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
    .article{
        border: 1px solid grey;
  padding: 2%;
    }
    .h1heading{
        width: 100%;
  padding: 14px 0 7px;
  font-weight: 500;
  min-height: 40px;
  font-size: 20px;
  word-break: break-word;
    }
    .input_wrapper{
        width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
    }
</style>
<script>
    import NavigationBar from '../../components/NavigationBar.vue';
    export default {
        data: () => ({
                article_status: null,
                article:{
                    title : 'title',
                    description : 'description'
                },
                xid : '',
                nav_ixd : Math.random(),
            }),

        created () {
            this.xid = this.$route.params.xid;
        },
        mounted() {
            this.$nextTick(() => { 
                this.article_status = "Loading...";
                let uri = '/api/get_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article_status = "Loaded"
                    this.article = response.data;
                });
            });
            console.log('create_article with x_id '+this.xid+' mounted.');
        },
        methods : {
            title_update(e){
                this.article.title = e.target.innerHTML;
                this.article_status = "Saving.."
                let uri = '/api/update_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                urlencoded.append("title", this.article.title);
                urlencoded.append("description", this.article.description);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article_status = "Saved"
                    //this.article = response.data;
                });
            },
            description_update(e){
                this.article.description = e.target.innerHTML;
                this.article_status = "Saving.."
                let uri = '/api/update_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                urlencoded.append("title", this.article.title);
                urlencoded.append("description", this.article.description);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article_status = "Saved"
                    //this.article = response.data;
                });
            }
        },
        directives: {
            focus: {
                // directive definition
                inserted: function (el,binding) {
                    if(binding.value){
                        el.focus()
                    }
                }
            }
        },
        components :{
            'nav-bar'    : NavigationBar
        }
    }
</script>