<template>
    <div>
        <nav-bar v-bind:key="nav_ixd"></nav-bar>
        <div class="az-content az-content-profile">
      <div class="container mn-ht-100p">
        <div class="az-content-left az-content-left-profile">

          <div class="az-profile-overview">
            <div class="az-img-user">
              <img src="https://via.placeholder.com/500x500" alt="">
            </div><!-- az-img-user -->
            <div class="d-flex justify-content-between mg-b-20">
              <div>
                <h5 class="az-profile-name">{{ this.user.name }}</h5>
                <p class="az-profile-name-text">@{{ this.user.username }}</p>
              </div>
              <div class="btn-icon-list">
                <button class="btn btn-indigo btn-icon"><i class="fa fa-plus fa-2x"></i></button>
              </div>
            </div>

            <div class="az-profile-bio">
              {{ (user.bio) ? user.bio : "Seriously, I don't know about myself..." }} <a href="">More</a>
            </div><!-- az-profile-bio -->

            <hr class="mg-y-30">

            <label class="az-content-label tx-13 mg-b-20">Websites &amp; Social Channel</label>
            <div class="az-profile-social-list">
              <div class="media" v-for="link in user.links" v-bind:key="link.id" v-if="link.category == 'WEBSITES & SOCIAL CHANNEL'">
                <div class="media-icon"><i :class="link.icon"></i></div>
                <div class="media-body">
                  <span>{{ link.name }}</span>
                  <a href="">{{ link.value }}</a>
                </div>
              </div><!-- media -->
            </div><!-- az-profile-social-list -->
            <div class="az-content-label tx-13 mg-t-25 mg-b-25">Contact Information</div>
            <div class="az-profile-contact-list">
                <div class="media" v-for="link in user.links" v-bind:key="link.id" v-if="link.category == 'CONTACT INFORMATION'">
                <div class="media-icon"><i :class="link.icon"></i></div>
                <div class="media-body">
                    <span>{{ link.name }}</span>
                    <div>{{ link.value }}</div>
                </div><!-- media-body -->
                </div><!-- media -->
            </div><!-- az-profile-contact-list -->
          </div><!-- az-profile-overview -->

        </div><!-- az-content-left -->
        <div class="az-content-body az-content-body-profile">
          <nav class="nav az-nav-line">
            <a href="" :class="(article_tab.status ? active : not_active)" @click="followers_tab.status = false;article_tab.status=true;" data-toggle="tab">Articles</a>
            <a href="" :class="(followers_tab.status ? active : not_active)" @click="followers_tab.status = true;article_tab.status=false;" data-toggle="tab">Followers</a>
            <a href="" class="nav-link" data-toggle="tab">Following</a>
            <a href="" class="nav-link" data-toggle="tab">Recent Likes</a>
            <a href="" class="nav-link" data-toggle="tab">About</a>
          </nav>

          <div class="az-profile-body">
            <div class="row mg-b-20">
                <card-container :cardlist="articles" id="articles" v-if="article_tab.status"></card-container>
            </div><!-- row -->
            <!--<hr class="mg-y-40">-->
            <div class="mg-b-20"></div>

          </div><!-- az-profile-body -->
        </div><!-- az-content-body -->
      </div><!-- container -->
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
    import CardContainer from '../../components/CardContainer';
    export default {
        data: () => ({
            csrf     : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            nav_ixd : Math.random(),
            user : {},
            articles : [],
            loadmore : false,
            next_uri : '',
            article_tab : {
                status : true,
            },
            followers_tab : {
                status : false,
            },
            active : 'nav-link active',
            not_active : 'nav-link',
            
        }),
        mounted() {
            this.$nextTick(() => { 
                this.user.username = this.$route.params.username;
                let uri = '/api/view_profile';
                const xhr  = this.$store.getters.get_headers;
                console.log(this.user.username);
                var urlencoded = new URLSearchParams();
                urlencoded.append("username", this.user.username);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.user = response.data;
                    uri = '/api/articles';
                    console.log(this.user);
                    var urlencoded = new URLSearchParams();
                    urlencoded.append("user_id", this.user.id);
                    urlencoded.append("view", 'profile');
                    var data = urlencoded;
                    
                    this.axios.post(uri,data).then((response) =>{
                        console.log(response);
                        if(response.data.current_page < response.data.last_page){
                            this.loadmore = true;
                            this.next_uri = response.data.next_page_url;
                        }
                        response.data.data.forEach(element => {
                            this.articles.push(element);
                        });
                        console.log(this.articles);
                        this.scroll();
                    });
                });
            });
        },
        components:{
            'nav-bar' : NavigationBar,
            'card-container' : CardContainer,
        },
        methods: {
            scroll () {
                console.log("scroll is in action");
                window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                if (bottomOfWindow) {
                    console.log("scroll is in action again");
                    if(this.loadmore && this.article_tab.status){
                        var urlencoded = new URLSearchParams();
                        urlencoded.append("user_id", this.user.id);
                        var data = urlencoded;
                        
                        let uri = this.next_uri;
                        this.axios.get(uri,data).then((response) =>{
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
                }
                };
            },
        },
    }
</script>