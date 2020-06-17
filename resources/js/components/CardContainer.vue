<template>
    <div class="row row-sm mg-b-20">
        <card v-for="card in cardlist" v-bind:key="card.id" :object="card"></card>
    </div>
</template>
<script>
    import Card from './Card';
    export default {
        props: ['cardlist'],
        components:{
            'card' : Card
        },
        mounted() {
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