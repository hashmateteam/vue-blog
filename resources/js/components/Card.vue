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
        <div class="card-footer bd-t" style="background-color: #fcfcfc;padding-bottom: 50px;border-bottom-left-radius: 49px;border-bottom-right-radius: 50px;">
                <span class="tx-right" style="float:right">
                    {{ object.views }}
                    <i class="fa fa-eye fa-2x mg-l-5 mg-r-5"></i>
                </span>
            </div>
        </div><!-- card -->
    </div>
</template>
<script>
    export default {
        props: ['object'],
        mounted() {
            //console.log('card mounted.')
        },
        methods:{
            view_article(username,xid){
                const path = '/articles/@' + username + '/' + xid;
                this.$router.push({ path:path });
            },
        },
    }
</script>