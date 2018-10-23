<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div></div>
    <!--<input type="text" >-->
    <button v-on:click="click">click me</button>
    <button v-on:click="a = !a">{{ a ? 'hide' : 'show'}}</button>
    {{ count }}
    <HelloWorld msg="asdasd" v-if="a"/>
    <Button  msg="aaa1"/>
    <Button msg="aaa2"/>
    <input type="text" v-on:change="changeInputValue">
    <div>{{ str }}</div>


    <div v-for="item in massiv" :key="item.title">
      <!--повториться столько раз, сколько у тебя элементов в массиве-->
      <div>{{ item.title }}</div>
    </div>
    <List />


    <br>
    <br>
    <br>
    <br>
    <!--отправляем значение в хранилище при клике-->
    <button v-on:click="increment">increment</button>
    <!--выводим значния из хранилища-->
    {{this.counter}}
    <br>
    <br>
    <br>
    <!--&lt;!&ndash;сохраняем локальную сумму при изменении, указываем, что значения input зависят на-->
    <!--прямую от локальной суммы(моментально при изменении сохраняем новое значение в локальнуюСумму и выводим в input&ndash;&gt;-->
    <input type="text" v-on:change="changeLocalSumm" v-model="localSumm">
    <!--отправляем значение в хранилище при клике-->
    <button v-on:click="sumbmitSumm">submit new summ</button>
    <!--выводим значния из хранилища-->

    <div>{{ this.summ }}</div>
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
