<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 contenteditable="true" v-title:titlechange="article.title" v-html="article.title" style="color:#000" v-bind="article.title"> {{ article.title === null ? ' Title' : article.title }}</h1>  
            </div>        
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
<script>

    export default {
        data: () => ({
                article:{},
                xid : ''
            }),

        created () {
            this.xid = this.$route.params.xid;
        },
        mounted() {
            this.$nextTick(() => { 
                let uri = '/api/get_article';
                const xhr  = this.$store.getters.get_headers;
                var urlencoded = new URLSearchParams();
                urlencoded.append("xid", this.xid);
                var data = urlencoded;
                this.axios.post(uri,data,xhr).then((response)=>{
                    console.log(response);
                    this.article = response.data;
                });
            });
            console.log('create_article with x_id '+this.xid+' mounted.');
        },
        methods : {
            titlechange(){
                alert("K");
            }
        },
        directives: {
            title: {
                // directive definition
                inserted: function (el) {
                    el.focus()
                },
                update: function (el, binding, vnode) {
                    binding.arg()
                    /*
                    var s = JSON.stringify
                    el.innerHTML =
                    'name: '       + s(binding.name) + '<br>' +
                    'value: '      + s(binding.value) + '<br>' +
                    'expression: ' + s(binding.expression) + '<br>' +
                    'argument: '   + s(binding.arg) + '<br>' +
                    'modifiers: '  + s(binding.modifiers) + '<br>' +
                    'vnode keys: ' + Object.keys(vnode).join(', ')
                    */
                }
            }
        },
    }
</script>