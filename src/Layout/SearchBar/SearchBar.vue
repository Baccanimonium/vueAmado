
<template>
    <div class="search-wrapper section-padding-100" v-bind:class="{ active: isShowingSearchBar }">
        <div class="search-close" v-on:click="closeSearchBar">
            x
        </div>
        <form action="#" method="get" class="search-content">
            <input
                    class="search-input"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Type your keyword..."
                    v-on:change="ss"
            >
            <button type="submit" v-on:click="dd"><img src="search.png" alt=""></button>
        </form>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SearchBar',
  computed: mapState([
    'isShowingSearchBar',
    'dd',
  ]),
  data() {
    return {
      isShow: false,
      a: '123',
    };
  },
  methods: {
    ...mapMutations(['dd']),
    closeSearchBar() { this.isShow = false; },
    ss(e) { this.a = e.target.value; },
    bb(e) { e.preventDefault(); dd(this.a); },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
