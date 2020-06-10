<template>
    <div class="az-header">
      <div class="container">
        <div class="az-header-left">
          <a href="index.html" class="az-logo">a<span>rti</span>cles</a>
          <a href="" id="azNavShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-navbar az-navbar-three">
          <div><a href="index.html" class="az-logo">a<span>rti</span>cles</a></div>
          <ul class="nav">
            <!-- add menu if you want -->
          </ul><!-- nav -->
        </div><!-- az-navbar -->
        <div class="az-header-right">
          <a href="" class="az-header-search-link"><i class="fas fa-search"></i></a>
          <div class="az-header-message">
            <a href="app-chat.html"><i class="fas fa-messages"></i></a>
          </div><!-- az-header-message -->
          <div class="dropdown az-header-notification">
            <a href="" class="new"><i class="fas fa-bell"></i></a>
            <div class="dropdown-menu">
              <div class="az-dropdown-header mg-b-20 d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
              <h6 class="az-notification-title">Notifications</h6>
              <p class="az-notification-text">You have 2 unread notification</p>
              <div class="az-notification-list">
                <div class="media new">
                  <div class="az-img-user"><img src="https://via.placeholder.com/500x500" alt=""></div>
                  <div class="media-body">
                    <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                    <span>Mar 15 12:32pm</span>
                  </div><!-- media-body -->
                </div><!-- media -->
                <div class="media new">
                  <div class="az-img-user online"><img src="https://via.placeholder.com/500x500" alt=""></div>
                  <div class="media-body">
                    <p><strong>Joyce Chua</strong> just created a new blog post</p>
                    <span>Mar 13 04:16am</span>
                  </div><!-- media-body -->
                </div><!-- media -->
                <div class="media">
                  <div class="az-img-user"><img src="https://via.placeholder.com/500x500" alt=""></div>
                  <div class="media-body">
                    <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                    <span>Mar 13 02:56am</span>
                  </div><!-- media-body -->
                </div><!-- media -->
                <div class="media">
                  <div class="az-img-user"><img src="https://via.placeholder.com/500x500" alt=""></div>
                  <div class="media-body">
                    <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                    <span>Mar 12 10:40pm</span>
                  </div><!-- media-body -->
                </div><!-- media -->
              </div><!-- az-notification-list -->
              <div class="dropdown-footer"><a href="">View All Notifications</a></div>
            </div><!-- dropdown-menu -->
          </div><!-- az-header-notification -->
          <div class="dropdown az-profile-menu">
            <a href="" class="az-img-user"><img src="https://via.placeholder.com/500x500" alt=""></a>
            <div class="dropdown-menu">
              <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
              <div class="az-header-profile">
                <div class="az-img-user">
                  <img src="https://via.placeholder.com/500x500" alt="">
                </div><!-- az-img-user -->
                <h6>Aziana Pechon</h6>
                <span>Premium Member</span>
              </div><!-- az-header-profile -->
              <router-link to="/auth-in" class="nav-link"><i class="fas fa-user"></i>Login</router-link>
              <router-link to="/auth-up" class="nav-link"><i class="fas fa-users"></i>Register</router-link>
              <a href="page-signin.html" class="dropdown-item"><i class="fas fa-power-outline"></i> Sign Out</a>
            </div><!-- dropdown-menu -->
          </div>
        </div><!-- az-header-right -->
      </div><!-- container -->
    </div><!-- az-header -->
</template>
<script>
    export default {
        props: [],
        mounted() {
          console.log('NavBar.vue mounted.');
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