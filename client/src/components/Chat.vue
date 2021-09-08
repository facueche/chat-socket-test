<template>
    <div>Holi</div>
</template>

<script>
export default {
    name: 'Chat',
    created() {
        console.log('on chat view with', this.$route.params.username);
    },
    data() {
        return {
            mesaage: '',
            action: '',
        }
    }
}
</script>