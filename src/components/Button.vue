<template>
    <button>{{ msg }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      msg: String,
    },
  };
</script>

<style scoped>

</style>
