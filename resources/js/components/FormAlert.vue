<template>
    <span>
    <br>
    <div class="alert alert-solid-danger mg-b-0"  role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
        <strong>(:BOT:)</strong> {{ message }}
    </div>
    <br>
    </span>
</template>
<script>
    export default {
        props: ['message'],
        mounted() {
            console.log('FormAlert mounted.')
        }
    }
</script>