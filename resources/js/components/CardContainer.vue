<template>
    <div class="row row-sm mg-b-20">
        <card v-for="card in cardlist" v-bind:key="card.id" :object="card" :auth-user="( auth_user_status ? auth_user : auth_user_status )"></card>
    </div>
</template>
<script>
    import Card from './Card';
    export default {
        data : ()=>({
            auth_user:{
                
            },
            auth_user_status: false
        }),
        props: ['cardlist'],
        components:{
            'card' : Card
        },
        mounted() {
            this.$nextTick(() => {
                if(this.$store.getters.get_auth.status){
                    this.auth_user = this.$store.getters.get_auth_user;
                    this.auth_user_status = true;
                }
            });
            //console.log('card-container mounted.')
        },
        methods:{
            view_article(username,xid){
                const path = '/articles/@' + username + '/' + xid;
                this.$router.push({ path:path });
            },
        },
    }
</script>