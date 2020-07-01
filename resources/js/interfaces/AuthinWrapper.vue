<template>
<div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo"><span>#</span>a<span>rti</span>cles</h1>
        <div class="az-signin-header">
          <h2>Welcome back!</h2>
          <h4>Please sign in to continue</h4>

          <form @submit.prevent="authuser" :action="ss_authin_route" ref="authin_form">
            <input type="hidden" name="_token" :value="csrf">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" v-model="user.username" placeholder="Enter your username" value="" required>
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="user.password"  placeholder="Enter your password" value="" required>
            </div><!-- form-group -->
            <label class="ckbox">
                <input type="checkbox" @change="check()"><span>Remember me</span>
            </label>
            <button class="btn btn-az-primary btn-block">Sign In</button>
          </form>
          <form-alert v-if="error.auth.status" :message="error.auth.message" :danger="error.auth.type"></form-alert>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <router-link to="/auth-up">Create an Account</router-link></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
</template>
<script>
    import FormAlert from '../components/FormAlert.vue';
    export default {
        data: () => ({
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            ss_authin_route : document.querySelector('meta[name="ss-authin-route"]').getAttribute('content'),
            user:{},
            json_auth_status:false,
            error:{
                auth : {"status":false,"message":"","type":true},
            },
        }),
        mounted() {
             this.$nextTick(() => {
               //console.log("mounting authin");
               //console.log((!(this.$store.getters.get_auth).status));
               console.log('login route from server is:' + this.ss_authin_route);
                if((this.$store.getters.get_auth).status){
                  this.$router.push({ path: '/' });
                }
            });
            //console.log('Authin_Wrapper mounted.');
            this.user.remember = false;
        },
        methods: {
            authuser(){
              if(this.json_auth_status){
                return true;
              }
                let uri = '/api/authin';
                this.axios.post(uri, this.user).then((response) => {
                    console.log(response);
                    if(response.status === 200){
                        this.$store.dispatch("update_token", String(response.data.success.token));
                        this.$store.dispatch("update_auth_user", Object(response.data.user));
                        this.$cookie.set("authentication_token",response.data.success.token);
                        this.$cookie.set("auth_user",JSON.stringify(response.data.user));
                        this.json_auth_status = true;
                        this.$refs.authin_form.submit();
                        //console.log(this.$store.getters.get_token);
                        //console.log(response.data.user);
                        //console.log(this.$store.getters.get_auth_user);
                        //this.$router.push({ path:'/' });
                    }else{
                      for ( var property in response.data ) {
                          this.error[property].type = ( typeof response.data[property] != "undefined" ? true : false );
                          this.error[property].status = ( typeof response.data[property] != "undefined" ? true : false );
                          this.error[property].message = ( typeof response.data[property] != "undefined" ? response.data[property] : '' );
                      }
                    }
                });
            },
            check(){
              if(this.user.remember){
                this.user.remember = false;
              }else{
                this.user.remember = true;
              }
            }
        },
        components: {
            'form-alert': FormAlert
        }
    }
</script>