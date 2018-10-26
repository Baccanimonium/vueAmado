
<template>
    <div class="search-wrapper section-padding-100" v-bind:class="{ active: isShow }">
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
            >
            <button type="submit"><img src="/search.png" alt=""></button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    closeSearchBar() { this.isShow = false; },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
