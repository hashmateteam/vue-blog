<template>
    <span>
    <br>
    <div class="alert mg-b-0" :class="danger ? 'alert-solid-danger' : 'alert-solid-success'"  role="alert">
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
        props: ['message','danger'],
        mounted() {
            console.log('FormAlert mounted.')
        }
    }
</script>