<template>
    <div class="toast" v-show="toast.show">
        <span>{{toast.message}}</span>
    </div>
</template>

<script>
export default {
    computed: {
        toast(){
            return this.$store.getters.getToast
        }
    }
}
</script>

<style>
    .toast {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 10px 15px;
        min-width: 200px;
        background-color: #222d61;
        color: white;
        font-size: 15px;
        font-weight: 400;
        padding: 10px;
    }
</style>
