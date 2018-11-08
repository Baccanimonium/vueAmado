<template>
    <div class="wrapper">
        <div class="block">
            task1
            <div class="sub-block">asd</div>
        </div>
        <div class="block">task2</div>
        <div class="block">task3</div>
        <div class="block">task4</div>
        <div class="block">task5</div>
        <div class="block">task6</div>
        <div class="block">task7</div>
        <ImgWrapper v-bind:imgArray="img"/>

    </div>
</template>

<script>
import ImgWrapper from './ImgWrapper.vue';

export default {
  name: 'Task',
  components: {
    ImgWrapper,
  },
  data() {
    return {
      img: ['/bg-img/1.jpg', '/bg-img/2.jpg'],
    };
  },
};
</script>

<style lang="scss" src="./style.scss" />
