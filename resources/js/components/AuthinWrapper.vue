<template>
<div class="az-signin-wrapper">
      <div class="az-card-signin">
        <h1 class="az-logo"><span>#</span>a<span>rti</span>cles</h1>
        <div class="az-signin-header">
          <h2>Welcome back!</h2>
          <h4>Please sign in to continue</h4>

          <form method="POST" action="">
            <input type="hidden" name="action" value="auth-in">
            <input type="hidden" name="_token" :value="csrf">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" name="username" placeholder="Enter your username" value="" required>
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password"  placeholder="Enter your password" value="" required>
            </div><!-- form-group -->
            <button class="btn btn-az-primary btn-block">Sign In</button>
          </form>
        </div><!-- az-signin-header -->
        <div class="az-signin-footer">
          <p><a href="">Forgot password?</a></p>
          <p>Don't have an account? <a href="./register">Create an Account</a></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-card-signin -->
    </div><!-- az-signin-wrapper -->
</template>
<script>
    export default {
        data: () => ({
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }),
        mounted() {
            console.log('Authin_Wrapper mounted.')
        }
    }
</script>