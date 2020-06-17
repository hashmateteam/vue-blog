<template>
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card bd-0">
                <p class="card-text">{{ object.title }}</p>
                <img class="img-fluid" :src="object.image_src" alt="Image">
                <div class="card-body bd bd-t-0">
                    <p class="card-text" v-html="object.description"></p>
                </div>
                <div class="card-footer bd-t">
                    <span>
                    {{ object.created_at | format_date }}
                    </span>
                    <span class="tx-right" style="float:right">
                        {{ object.views }}
                        <i class="fa fa-eye mg-l-5 mg-r-5"></i>
                    </span>
                </div><!-- card-footer -->
            </div><!-- card -->
        </div><!-- col-4 -->
</template>
<script>
    export default {
        props: ['object'],
        mounted() {
            //console.log('card mounted.')
        }
    }
</script>