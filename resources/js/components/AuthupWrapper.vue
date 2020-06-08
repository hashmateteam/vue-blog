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

          <form action="./control/" method="post">
          <input type="hidden" name="_token" :value="csrf">
          <input type="hidden" name="action" value="auth-up">
            <div class="form-group">
              <label>Firstname &amp; Lastname</label>
              <input type="text" class="form-control" name="name" placeholder="Enter your firstname and lastname">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" name="email" placeholder="Enter your email">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" name="username" placeholder="Enter unique username">
            </div><!-- form-group -->
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" name="password" placeholder="Enter your password">
            </div><!-- form-group -->
            <label class="az-content-label tx-11 tx-medium tx-gray-600">Contact</label>
            <div class="input-group" style="margin-bottom:10px;">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="typcn typcn-phone-outline tx-24 lh--9 op-6"></i>
                </div>
              </div><!-- input-group-prepend -->
              <input id="phoneMask" name="mobile" type="text" class="form-control" placeholder="(9999) 9999999">
            </div><!-- input-group -->
            <button class="btn btn-az-primary btn-block">Create Account</button>
          </form>
        </div><!-- az-signup-header -->
        <div class="az-signup-footer">
          <p>Already have an account? <a href="./login">Sign In</a></p>
        </div><!-- az-signin-footer -->
      </div><!-- az-column-signup -->
    </div><!-- az-signup-wrapper -->
</template>
<script>
    export default {
        data: () => ({
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }),
        mounted() {
            console.log('Authup_Wrapper mounted.')
        }
    }
</script>