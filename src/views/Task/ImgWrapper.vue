<template>
    <div class="img-wrapper">
        <img v-bind:src="imgArray[0]" alt="" height="250" v-on:mouseover="handleMouseOver" v-if="!isHovered">
        <img v-bind:src="imgArray[1]" alt="" height="250" v-on:mouseleave="handleMouseLeave" v-if="isHovered">
    </div>

</template>

<script>
export default {
  name: 'ImgWrapper',
  props: ['imgArray'],
  data() {
    return ({
      isHovered: false,
    });
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>

</style>
