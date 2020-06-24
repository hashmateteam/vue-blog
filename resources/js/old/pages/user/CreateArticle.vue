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
									<a class="nav-link active collapsed" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Cover Image</a>
								</nav>
								<div class="card-header-right">
									<nav class="nav nav-pills">
										<a @click="article_publish" class="nav-link active" :style="publish_style"><span>{{ article.is_publish == 1 ? 'Published' : 'Publish' }}</span><span>{{ article.is_publish == 1 ? 'Published' : 'Publish' }}</span></a>
									</nav>
								</div>
								<!-- card-header-right -->
							</div>
							<div class="card-body">
								<div class="mg-t-5 file-upload collapse" id="collapseExample" style="">
									<div class="image-upload-wrap">
										<input class="file-upload-input" type='file' @change="readURL($event);" accept="image/*" />
										<div class="drag-text">
											<h3><i class="fa fa-upload fa-5x" aria-hidden="true"></i></h3>
										</div>
									</div>
									<div class="file-upload-content">
										<img class="file-upload-image img-fluid" src="#" alt="your image" />
										<div class="image-title-wrap">
											<button type="button" @click="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
										</div>
									</div>
								</div>
								<div class="mg-t-20">
									<div class="row row-xs">
										<div class="col-md-12">
											<div class="az-form-group">
												<label class="form-label">Title</label>
												<input type="text" class="form-control" placeholder="Wrtie something intuitative...!" v-model="article.title" @blur="article_update">
											</div>
											<!-- az-form-group -->
										</div>
										<!-- col -->
									</div>
									<!-- row -->
								</div>
								<div class="ht-350">
									<editor v-model="article.description" placeholder="Write your post content here ..." @blur="article_update"></editor>
								</div>
							</div>
							<!-- card-body -->
							<div class="card-footer">
							</div>
							<!-- card-footer -->
						</div>
						<!-- card -->
					</div>
					<!-- media-body -->
					<div class="media-right">
						<div class="card card-minimal-one">
							<div class="card-header">
								<h1 v-html="article.title"></h1>
							</div>
							<div class="card-body">
								<div v-html="article.description"></div>
							</div>
							<!-- card-body -->
							<div class="chart-wrapper">
								<div id="flotChart1" class="flot-chart" style="padding: 0px;">
									<canvas class="flot-base" width="368" height="312" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 295px; height: 250px;"></canvas>
									<div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
										<div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
											<div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 2px; text-align: center;">1h</div>
											<div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 54px; text-align: center;">12h</div>
											<div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 113px; text-align: center;">1d</div>
											<div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 168px; text-align: center;">1w</div>
											<div style="position: absolute; max-width: 59px; top: 237px; font: 700 11px / 13px Archivo, Arial, sans-serif; color: rgb(150, 157, 171); left: 223px; text-align: center;">1m</div>
										</div>
									</div>
									<canvas class="flot-overlay" width="368" height="312" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 295px; height: 250px;"></canvas>
								</div>
							</div>
							<!-- chart-wrapper -->
						</div>
						<!-- card -->
					</div>
					<!-- media-left -->
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
    .file-upload {
        background-color: #ffffff;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }

    .file-upload-btn {
        width: 100%;
        margin: 0;
        color: #fff;
        background: #6610f2;
        border: none;
        padding: 10px;
        border-radius: 4px;
        border-bottom: 4px solid #6610f2;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
    }

    .file-upload-btn:hover {
        background: #6610f2;
        color: #ffffff;
        transition: all .2s ease;
        cursor: pointer;
    }

    .file-upload-btn:active {
        border: 0;
        transition: all .2s ease;
    }

    .file-upload-content {
        display: none;
        text-align: center;
    }

    .file-upload-input {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        outline: none;
        opacity: 0;
        cursor: pointer;
    }

    .image-upload-wrap {
        margin-top: 20px;
        border: 4px dashed #969dab;
        position: relative;
    }

    .image-dropping,
    .image-upload-wrap:hover {
        background-color: #6710f2c7;
        border: 4px dashed #ffffff;
    }
    .image-dropping,
    .image-upload-wrap:hover > .drag-text h3 {
        color: #ffffff;
    }

    .image-title-wrap {
        padding: 0 15px 15px 15px;
        color: #222;
    }

    .drag-text {
        text-align: center;
    }

    .drag-text h3 {
        font-weight: 100;
        text-transform: uppercase;
        color: #6610f2;
        padding: 60px 0;
    }

    .file-upload-image {
        max-height: 200px;
        max-width: 200px;
        margin: auto;
        padding: 20px;
    }

    .remove-image {
        width: 200px;
        margin: 0;
        color: #fff;
        background: #cd4535;
        border: none;
        padding: 10px;
        border-radius: 4px;
        border-bottom: 4px solid #b02818;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
    }

    .remove-image:hover {
        background: #c13b2a;
        color: #ffffff;
        transition: all .2s ease;
        cursor: pointer;
    }

    .remove-image:active {
        border: 0;
        transition: all .2s ease;
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

                },
                publish_style: '',
                xid : '',
                nav_ixd : Math.random(),
                content : '<h1>HEloo</h1>',
                customToolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }], ["image", "code-block"]]
        }),
        created () {
            this.xid = this.$route.params.xid;
        },
        mounted() {
            //jQuery
            $('.image-upload-wrap').bind('dragover', function () {
                    $('.image-upload-wrap').addClass('image-dropping');
                });
                $('.image-upload-wrap').bind('dragleave', function () {
                    $('.image-upload-wrap').removeClass('image-dropping');
            }),

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
                    if(this.article.is_publish){
                        this.publish_style = "background-color: #6610f2;color: #fff;";
                    }else{
                        this.publish_style = "background-color: #969dab;color: #fff;";
                    }
                    if(this.article.image_src != null){
                        $('.file-upload-input').val('');
                        $('.file-upload-content').show();
                        $('.image-upload-wrap').hide();
                        $('.file-upload-image').attr('src', this.article.image_src);
                        $('.image-title').html('Current Cover Image');
                    }
                });
            });
            console.log('create_article with x_id '+this.xid+' mounted.');
        },
        methods : {
            article_update(){
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
            article_publish(){
                this.article_status = "Saving..";
                var publish  = this.article.is_publish;
                if(publish){
                    publish = 0;
                }else{
                    publish = 1;
                }
                let uri = '/api/publish_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                urlencoded.append("title", this.article.title);
                urlencoded.append("description", this.article.description);
                urlencoded.append("is_publish",publish);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article_status = "Saved";
                    this.article.is_publish = publish;
                    if(this.article.is_publish){
                        this.publish_style = "background-color: #6610f2;color: #fff;";
                    }else{
                        this.publish_style = "background-color: #969dab;color: #fff;";
                    }
                    //this.article = response.data;
                });
            },
            readURL(e) {
                //console.log("running");
                const input = e.target; 
                if (input.files && input.files[0]) {

                    var reader = new FileReader();

                    reader.onload = function(e) {
                        $('.image-upload-wrap').hide();
                        $('.file-upload-image').attr('src', e.target.result);
                        $('.file-upload-content').show();
                        $('.image-title').html(input.files[0].name);
                    };

                    reader.readAsDataURL(input.files[0]);
                    this.article_status = "Uploading...";
                    let uri = '/api/upload_image';
                    const xhr  = this.$store.getters.get_headers;
                
                    var data = new FormData();
                    data.append("image", input.files[0]);
                    data.append("xid", this.xid);

                    this.axios.post(uri,data,xhr).then(result => {
                        console.log(result);
                        this.article_status = "Saved";
                        //let url = result.data.url; // Get url from response
                        //Editor.insertEmbed(cursorLocation, "image", url);
                        //resetUploader();
                        }).catch(err => {
                        console.log(err);
                        });
                    //console.log("runned");
                } else {
                    removeUpload();
                }
            },

            removeUpload() {
                $('.file-upload-input').val('');
                $('.file-upload-content').hide();
                $('.image-upload-wrap').show();
                this.article_status = "Removing...";
                let uri = '/api/delete_image';
                const xhr  = this.$store.getters.get_headers;
            
                var data = new FormData();
                data.append("xid", this.xid);

                this.axios.post(uri,data,xhr).then(result => {
                    console.log(result);
                    this.article_status = "Saved";
                }).catch(err => {
                console.log(err);
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