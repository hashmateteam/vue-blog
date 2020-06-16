<template>
    <div>
        <nav-bar v-bind:key="nav_ixd" :article_state="article_status"></nav-bar>
        <div class="az-content pd-y-20">
            <div class="container">
                <div class="az-content-body">
                    <div class="media media-dashboard-one mg-b-20">
                    <div class="media-body">
                    <div class="card card-minimal-two">
                        <div class="card-header">
                        <nav class="nav nav-pills">
                            <a class="nav-link active" data-toggle="tab" href="#">Cover Image</a>
                        </nav>
                        <div class="card-header-right">
                            <nav class="nav nav-pills">
                            <a href="" class="nav-link"><span>Preview</span><span>V</span></a>
                            <a href="" class="nav-link active"><span>Publish</span><span>P</span></a>
                            </nav>
                        </div><!-- card-header-right -->
                        </div>
                        <div class="card-body">
                        <div class="mg-t-20">
                            <div class="row row-xs">
                            <div class="col-md-12">
                                <div class="az-form-group">
                                <label class="form-label">Title</label>
                                <input type="text" class="form-control" placeholder="Wrtie something intuitative...!" v-model="article.title">
                                </div><!-- az-form-group -->
                            </div><!-- col -->
                            </div><!-- row -->
                        </div>
                        <div class="ht-350">
                            <editor v-model="article.description" placeholder="Write your post content here ..." @blur="description_update()"></editor>
                        </div>
                        </div><!-- card-body -->
                        <div class="card-footer">
                        
                        </div><!-- card-footer -->
                    </div><!-- card -->
                </div><!-- media-body -->
            <div class="media-right">
              <div class="card card-minimal-one">
                <div class="card-header">
                    <h1 v-html="article.title"></h1>
                </div>
                <div class="card-body">
                  <div v-html="article.description"></div>
                </div><!-- card-body -->
                <div class="chart-wrapper">
                  <div id="flotChart1" class="flot-chart" style="padding: 0px;"><canvas class="flot-base" width="368" height="312" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 295px; height: 250px;"></canvas><div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"><div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 2px; text-align: center;">1h</div><div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 54px; text-align: center;">12h</div><div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 113px; text-align: center;">1d</div><div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 168px; text-align: center;">1w</div><div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 223px; text-align: center;">1m</div></div></div><canvas class="flot-overlay" width="368" height="312" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 295px; height: 250px;"></canvas></div>
                </div><!-- chart-wrapper -->
              </div><!-- card -->
            </div><!-- media-left -->
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
// Advanced Use - Hook into Quill's API for Custom Functionality
    import { VueEditor } from "vue2-editor";
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
                content : '<h1>HEloo</h1>',
                customToolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["image", "code-block"]]
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
            'nav-bar'    : NavigationBar,
            'editor' : VueEditor,
        }
    }
</script>