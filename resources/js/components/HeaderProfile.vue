<template>
    <div class="az-header-profile">
        <div class="az-img-user">
            <img src="https://via.placeholder.com/500x500" alt="">
        </div><!-- az-img-user -->
        <h6>{{ user.name }}</h6>
        <span>{{ user.username }}</span>
    </div><!-- az-header-profile -->
</template>
<script>
    export default{ 
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            user  : {}
        }),
        mounted(){
            this.user = this.$store.getters.get_auth_user;
            console.log("Header Profile MOUNTED");
            console.log(this.user);
        }
    }
</script>