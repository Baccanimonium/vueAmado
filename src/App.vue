<template>
  <div id="app">
    <SearchBar />
    <div>
        <SideBar />
        <router-view/>
    </div>
    <Promo />
    <Footer />
  </div>
</template>


<script>
import Footer from './Layout/Footer/Footer.vue';
import SideBar from './Layout/SideBar/SideBar.vue';
import Promo from './Layout/Promo.vue';
import SearchBar from './Layout/SearchBar/SearchBar.vue';

export default {
  components: {
    Footer, SideBar, Promo, SearchBar,
  },
};
</script>

<style lang="scss" src="./style.scss" />

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
