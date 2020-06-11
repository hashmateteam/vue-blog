<template>
    <div class="az-header">
      <div class="container">
        <div class="az-header-left">
          <router-link to="/@articles" class="az-logo">a<span>rti</span>cles</router-link>
          <a href="" id="azNavShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-navbar az-navbar-three">
          <div></div>
          <ul class="nav">
            <!-- add menu if you want -->
          </ul><!-- nav -->
        </div><!-- az-navbar -->
        <div class="az-header-right">
          <div class="dropdown az-profile-menu">
            <a href="" class="az-img-user"><img src="https://via.placeholder.com/500x500" alt=""></a>
            <div class="dropdown-menu">
              <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
              <header-profile v-if="auth" v-bind:key="header_profile"></header-profile>
              <router-link to="/auth-in" v-if="notLogin" class="dropdown-item" v-bind:key="authin"><i class="fas fa-lock-open"></i> Login</router-link>
              <router-link to="/auth-up" v-if="notLogin" class="dropdown-item" v-bind:key="authup"><i class="fas fa-user"></i> Register</router-link>
              <button class="dropdown-item" @click="logout()" v-if="!notLogin"><i class="fas fa-power"></i> Sign Out</button>
            </div><!-- dropdown-menu -->
          </div>
        </div><!-- az-header-right -->
      </div><!-- container -->
    </div><!-- az-header -->
</template>
<script>
    import HeaderProfile from "./HeaderProfile.vue";
    export default {
        data : () => ({
          auth : false,
          notLogin : true,
          authin : '1',
          authup : '2',
          header_profile : '3'
        }),
        props: [],
        components : {
          'header-profile' : HeaderProfile
        },
        methods : {
          logout(){
            this.$cookie.delete("authentication_token");
            if (this.$route.path !== '/@articles') this.$router.push('/@articles')
            this.$store.dispatch("reset_token" ,Boolean(true));
            this.notLogin = true;
            this.auth = false;
            this.authin = Math.random();
            this.authup = Math.random();
            this.header_profile = Math.random();
          }
        },
        mounted() {
          this.$nextTick(() => {
               //console.log("mounting navigation");
               //console.log((!(this.$store.getters.get_auth).status));
                if((this.$store.getters.get_auth).status){
                  //console.log("notLogin on mounting of navigation bar");
                  //console.log(this.notLogin);
                  this.notLogin = false;
                  //console.log("notLogin after change of navigation bar");
                  //console.log(this.notLogin);
                }
                this.auth = this.$store.getters.get_auth.status;
                console.log('Navigation NEXTTICK CALLED');
          });
          //console.log('NavBar.vue mounted.');
          //console.log(this.$store.getters.get_auth.status);
          $(function(){
            'use strict'

            // This template is mobile first so active menu in navbar
            // has submenu displayed by default but not in desktop
            // so the code below will hide the active menu if it's in desktop
            if(window.matchMedia('(min-width: 992px)').matches) {
              $('.az-navbar .active').removeClass('show');
            }

            // Shows header dropdown while hiding others
            $('.az-header .dropdown > a').on('click', function(e) {
              e.preventDefault();
              $(this).parent().toggleClass('show');
              $(this).parent().siblings().removeClass('show');
            });

            // Showing submenu in navbar while hiding previous open submenu
            $('.az-navbar .with-sub').on('click', function(e) {
              e.preventDefault();
              $(this).parent().toggleClass('show');
              $(this).parent().siblings().removeClass('show');
            });

            // this will hide dropdown menu from open in mobile
            $('.dropdown-menu .az-header-arrow').on('click', function(e){
              e.preventDefault();
              $(this).closest('.dropdown').removeClass('show');
            });

            // this will show navbar in left for mobile only
            $('#azNavShow, #azNavbarShow').on('click', function(e){
              e.preventDefault();
              $('body').addClass('az-navbar-show');
            });

            // this will hide currently open content of page
            // only works for mobile
            $('#azContentLeftShow').on('click touch', function(e){
              e.preventDefault();
              $('body').addClass('az-content-left-show');
            });

            // This will hide left content from showing up in mobile only
            $('#azContentLeftHide').on('click touch', function(e){
              e.preventDefault();
              $('body').removeClass('az-content-left-show');
            });

            // this will hide content body from showing up in mobile only
            $('#azContentBodyHide').on('click touch', function(e){
              e.preventDefault();
              $('body').removeClass('az-content-body-show');
            })

            // navbar backdrop for mobile only
            $('body').append('<div class="az-navbar-backdrop"></div>');
            $('.az-navbar-backdrop').on('click touchstart', function(){
              $('body').removeClass('az-navbar-show');
            });

            // Close dropdown menu of header menu
            $(document).on('click touchstart', function(e){
              e.stopPropagation();

              // closing of dropdown menu in header when clicking outside of it
              var dropTarg = $(e.target).closest('.az-header .dropdown').length;
              if(!dropTarg) {
                $('.az-header .dropdown').removeClass('show');
              }

              // closing nav sub menu of header when clicking outside of it
              if(window.matchMedia('(min-width: 992px)').matches) {
                var navTarg = $(e.target).closest('.az-navbar .nav-item').length;
                if(!navTarg) {
                  $('.az-navbar .nav-item').removeClass('show');
                }
              }
            });
          });
        }
    }
</script>