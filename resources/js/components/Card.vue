<template>
    <div class="col-sm-12 col-lg-12 mg-t-20">
        <div class="card card-minimal-four" style="border: 0;">
        <div class="card-header" style="padding:0;border-bottom-width: 0px;">
            <img class="img-fluid" style="border-top-left-radius: 50px;border-top-right-radius: 50px;" :src="object.image_src" alt="Image">
            
        </div><!-- card-header -->
        <div class="card-body">
            <div class="media" style="margin-top:20px;">
            <div class="az-img-user bg-gray-500" style="margin-left: 20px;"><img src="https://via.placeholder.com/500x500"></div>
            <div class="media-body">
                <h5 style="color:#000;padding-top: 12px;padding-left: 15px;" @click="$router.push({path:'/u/@'+object.user.username+'/'})">{{ object.user.name }}</h5>
                <h6>{{ object.created_at | format_date }}</h6>
            </div><!-- media-body -->
            </div><!-- media -->
            <h4 class="mg-t-15" style="word-break: break-all;color:#000;padding-left: 50px;padding-right: 50px;" @click="view_article('bilalpunjabi786',object.xid)">{{ object.title }}</h4>
        </div><!-- card-body -->
        <div class="card-footer bd-t" style="background-color: #211e25;border-bottom-left-radius: 49px;border-bottom-right-radius: 50px;">
                <span>
                    <span :class="(auth_user !== false ? (' fa ' + ('fa-heart-o') + ' fa-2x '+ ' mg-t-15 pd-l-20 pd-b-20 pd-t-5'):'fa fa-heart-o fa-2x mg-t-15 pd-l-20 pd-b-20 pd-t-5')" @click="(auth_user !== false ? like(object.xid) : false)"></span>
                    <!-- a strong element with the custom content, in this case a number -->
                    <strong>
                        {{ object.likes }}
                    </strong>
                </span>
                <span>
                    <span class="fa fa-comment-o fa-2x mg-t-15 pd-l-20 pd-b-20 pd-t-5"></span>
                    <!-- a strong element with the custom content, in this case a number -->
                    <strong>
                        {{ object.comments }}
                    </strong>
                </span>
                <span>
                    <span class="fa fa-share fa-2x mg-t-15 pd-l-20 pd-b-20 pd-t-5"></span>
                    <!-- a strong element with the custom content, in this case a number -->
                    <strong>
                        {{ object.shares }}
                    </strong>
                </span>
            </div>
        </div><!-- card -->
    </div>
</template>
<script>
    export default {
        props: ['object','auth_user'],
        mounted() {
            //console.log('card mounted.')
        },
        methods:{
            view_article(username,xid){
                const path = '/articles/@' + username + '/' + xid;
                this.$router.push({ path:path });
            },
            like(xid){
                let uri = '/api/like_article';
                const xhr  = this.$store.getters.get_headers;
                //console.log(this.xid);
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", xid);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    if(response.data){
                        this.object.likes++;
                    }else{
                        this.object.likes--;
                    }
                });
            }
        },
    }
</script>