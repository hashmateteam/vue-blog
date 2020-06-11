<template>
    <div class="bd pd-20">
        <div class="media d-block d-sm-flex">
            <img src="" class="wd-100p wd-sm-200 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0" alt="">
            <div class="media-body">
            <h5 class="mg-b-15 tx-inverse">{{ title }}</h5>
                {{ description }}
            </div>
        </div>
    </div>
</template>
<script>
    export default{ 
        data: () => ({
            csrf  : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }),
        props : ['title','description'],
        mounted(){
            console.log(this.props);
            console.log("MEDIA OBJECT MOUNTED");
        }
    }
</script>