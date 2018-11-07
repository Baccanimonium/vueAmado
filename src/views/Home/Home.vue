<template>
  <div class="product-wrapper">
    <div class="single-products-catagory" :v-key="item.name" v-for="item of products">
      <router-link to="/">
        <img
          align="bottom"
          class="img-container"
          :src="item.img"
        />
        <!-- Hover Content -->
        <div class="hover-content">
          <div class="price-title">{{ item.price }}</div>
          <h2>{{ item.name }}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
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
    'products',
  ]),
  beforeMount() {
    this.$store.dispatch('loadProducts');
  },
  data() {
    return {
      localSumm: '',
      a: true,
      count: 0,
      str: '',
      localProducts: [],
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
