<template>
    <div class="az-signup-wrapper">
      <div class="az-column-signup-left">
        <div>
          <i class="typcn typcn-chart-bar-outline"></i>
          <h1 class="az-logo"><span>#</span>a<span>rti</span>cles</h1>
          <h5>Articles &amp; Developer Journal</h5>
          <p>Welcome to the #-articles ultimate solution for sharing new technology to large audience, share the best practices to solve a particular problems and to discuss about the upcoming future development in tools/technologies!</p>
          <p>Browse our site and see for yourself why you need #-articles.</p>
          <a href="index.html" class="btn btn-outline-indigo">Learn More</a>
        </div>
      </div><!-- az-column-signup-left -->
      <div class="az-column-signup">
        <h1 class="az-logo"><span>#</span>a<span>rti</span>cles</h1>
        <div class="az-signup-header">
          <h2>Get Started</h2>
          <h4>It's free to signup and only takes a minute.</h4>

          <form @submit.prevent="adduser">
          <input type="hidden" name="_token" :value="csrf">
            <div class="form-group">
              <label>Firstname &amp; Lastname</label>
              <input type="text" class="form-control" v-model="user.name" placeholder="Enter your firstname and lastname">
              <form-alert v-if="error.name.status" :message="error.name.message"></form-alert>
            </div><!-- form-group -->
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="user.email" placeholder="Enter your email">
              <form-alert v-if="error.email.status" :message="error.email.message"></form-alert>
            </div><!-- form-group -->
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" v-model="user.username" placeholder="Enter unique username">
              <form-alert v-if="error.username.status" :message="error.username.message"></form-alert>
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="user.password" placeholder="Enter your password">
              <form-alert v-if="error.password.status" :message="error.password.message"></form-alert>
            </div><!-- form-group -->
            <label class="az-content-label tx-11 tx-medium tx-gray-600">Contact</label>
            <div class="input-group" style="margin-bottom:10px;">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="typcn typcn-phone-outline tx-24 lh--9 op-6"></i>
                </div>
              </div><!-- input-group-prepend -->
              <input id="phoneMask" v-model="user.contact" type="text" class="form-control" placeholder="(9999) 9999999">
            </div><!-- input-group -->
            <form-alert v-if="error.contact.status" :message="error.contact.message"></form-alert>
            <button class="btn btn-az-primary btn-block">Create Account</button>
          </form>
        </div><!-- az-signup-header -->
        <div class="az-signup-footer">
          <p>Already have an account? <router-link to="/auth-in">Login</router-link></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-column-signup -->
    </div><!-- az-signup-wrapper -->
</template>
<script>
    import FormAlert from '../components/FormAlert.vue';
    export default {
        data: () => ({
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            user:{},
            error:{
                    name : {"status":false,"message":""},
                    email : {"status":false,"message":""},
                    username : {"status":false,"message":""},
                    password : {"status":false,"message":""},
                    contact : {"status":false,"message":""}
            }
        }),
        mounted() {
            this.$nextTick(() => {
               console.log("mounting authup");
               console.log((!(this.$store.getters.get_auth).status));
                if((this.$store.getters.get_auth).status){
                  this.$router.push({ path: '/' });
                }
            });
            console.log('Authup_Wrapper mounted.')
            console.log(this.$store.getters.get_headers);
        },
        methods: {
            adduser(){
                let uri = '/api/authup';
                this.axios.post(uri, this.user).then((response) => {
                    console.log(response);
                    for ( var property in response.data ) {
                        console.log( property );
                        this.error[property].status = ( typeof response.data[property] != "undefined" ? true : false );
                        this.error[property].message = ( typeof response.data[property] != "undefined" ? response.data[property][0] : '' );
                    }
                    if(response.status === 200){
                        this.$router.push("auth-in");
                    }
                });
            }
        },
        components: {
            'form-alert': FormAlert
        }
    }
</script>