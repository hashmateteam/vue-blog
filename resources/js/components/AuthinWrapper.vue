<template>
<div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo"><span>#</span>a<span>rti</span>cles</h1>
        <div class="az-signin-header">
          <h2>Welcome back!</h2>
          <h4>Please sign in to continue</h4>

          <form @submit.prevent="authuser">
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
          <form-alert v-if="error.auth.status" :message="error.auth.message"></form-alert>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <router-link to="/auth-up">Create an Account</router-link></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
</template>
<script>
    import FormAlert from './FormAlert.vue';
    export default {
        data: () => ({
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            user:{},
            error:{
                auth : {"status":false,"message":""},
            },
            token: ''
        }),
        mounted() {
            console.log('Authin_Wrapper mounted.');
            this.user.remember = false;
        },
        methods: {
            authuser(){
                let uri = '/api/authin';
                this.axios.post(uri, this.user).then((response) => {
                    console.log(response);
                    if(response.status === 200){
                        this.token = response.data.success.token;
                        this.$router.push("auth-up");
                    }
                    for ( var property in response.data ) {
                        console.log( property );
                        this.error[property].status = ( typeof response.data[property] != "undefined" ? true : false );
                        this.error[property].message = ( typeof response.data[property] != "undefined" ? response.data[property] : '' );
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