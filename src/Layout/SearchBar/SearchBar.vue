
<template>
    <div class="search-wrapper section-padding-100" v-bind:class="{ active: isShow }">
        <div class="search-close" v-on:click="closeSearchBar">
            x
        </div>
        <div class="search-content">
            <form action="#" method="get">
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
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    closeSearchBar() { console.log(1); this.isShow = false; },
  }
};
</script>

<style lang="scss" src="./style.scss" scoped />
