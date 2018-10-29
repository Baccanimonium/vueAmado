<template>
  <div class="product-wrapper">
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/1.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $180</div>
          <h2>Modern Chair</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/2.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $180</div>
          <h2>Minimalistic Plant Pot</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/3.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $180</div>
          <h2>Modern Chair</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/4.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $180</div>
          <h2>Night Stand</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/5.jpg"
        />
        <div class="hover-content">
          <div class="price-title">From $18</div>
          <h2>Plant Pot</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/6.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $320</div>
          <h2>Small Table</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/7.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $318</div>
          <h2>Metallic Chair</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/8.jpg"
        />
        <div class="hover-content">
          <div class="price-title">From $318</div>
          <h2>Modern Rocking Chair</h2>
        </div>
      </router-link>
    </div>

    <!-- Single Catagory -->
    <div class="single-products-catagory">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          src="../../../amado/img/bg-img/9.jpg"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">From $318</div>
          <h2>Home Deco</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// импортируем функции чтения и записи данных хранилища из библиотеки
import { mapState, mapMutations } from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/Button.vue';
import List from '@/views/List.vue';

function normalize(str) {
  return `123${str[1]}22${str[2]}33${str}`;
}

export default {
  name: 'home',
  computed: mapState([
    'counter',
    'summ',
  ]),
  async beforeMount() {
    const a = await axios.get('/api/post');
    console.log(a);
  },
  data() {
    return {
      localSumm: '',
      a: true,
      count: 0,
      str: '',
      massiv: [
        {
          data: 1,
          title: 'sasha1',
        },
        {
          data: 2,
          title: 'sasha2',
        },
        {
          data: 3,
          title: 'sasha3',
        },
        {
          data: 4,
          title: 'sasha4',
        },
      ],
    };
  },
  methods: {
    click() { this.count += 1; },
    changeInputValue(event) {
      this.str = normalize(event.target.value);
    },
    changeLocalSumm(event) {
      this.localSumm = event.target.value;
    },
    sumbmitSumm() {
      this.$store.commit('addSumm', {
        amount: this.localSumm,
      });
      this.localSumm = '';
    },
    ...mapMutations([
      'increment',
    ]),
  },
  components: {
    HelloWorld,
    Button,
    List,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
