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
                <button class="btn btn-primary btn-icon"><i class="fa fa-terminal fa-2x"></i></button>
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
            <a href="" class="nav-link active" data-toggle="tab">Articles</a>
            <a href="" class="nav-link" data-toggle="tab">Followers</a>
            <a href="" class="nav-link" data-toggle="tab">Following</a>
            <a href="" class="nav-link" data-toggle="tab">Recent Likes</a>
            <a href="" class="nav-link" data-toggle="tab">About</a>
          </nav>

          <div class="az-profile-body">

            <div class="row mg-b-20">
              
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
    export default {
        data: () => ({
            csrf     : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            nav_ixd : Math.random(),
            user : {}
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
                });
            });
        },
        components:{
            'nav-bar' : NavigationBar
        }
    }
</script>