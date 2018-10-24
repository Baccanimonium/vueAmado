<template>
  <div class="home">

  <!-- Search Wrapper Area End -->

    <!-- ##### Main Content Wrapper Start ##### -->
    <div class="main-content-wrapper d-flex clearfix">

      <!-- Mobile Nav (max width 767px)-->

      <!-- Header Area End -->

      <!-- Product Catagories Area Start -->
      <div class="products-catagories-area clearfix">
        <div class="amado-pro-catagory clearfix">

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/1.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/2.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $180</p>
                <h4>Minimalistic Plant Pot</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/3.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/4.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $180</p>
                <h4>Night Stand</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/5.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $18</p>
                <h4>Plant Pot</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/6.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $320</p>
                <h4>Small Table</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/7.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $318</p>
                <h4>Metallic Chair</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/8.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $318</p>
                <h4>Modern Rocking Chair</h4>
              </div>
            </a>
          </div>

          <!-- Single Catagory -->
          <div class="single-products-catagory clearfix">
            <a href="shop.html">
              <img src="img/bg-img/9.jpg" alt="">
              <!-- Hover Content -->
              <div class="hover-content">
                <div class="line"></div>
                <p>From $318</p>
                <h4>Home Deco</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- Product Catagories Area End -->
    </div>
    <!-- ##### Main Content Wrapper End ##### -->

    <!-- ##### Newsletter Area Start ##### -->
    <!-- ##### Newsletter Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
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
  ]),
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
