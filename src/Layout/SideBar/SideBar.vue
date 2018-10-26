<template>
    <div>
        <div class="mobile-nav">
            <!-- Navbar Brand -->
            <div class="amado-navbar-brand">
                <router-link active-class="active-router" to="/">
                    <img src="/logo.png" alt="">
                </router-link>
            </div>
            <!-- Navbar Toggler -->
            <div class="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>

        <!-- Header Area Start -->
        <header class="header-area">
            <!-- Close Icon -->
            <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            <!-- Logo -->
            <div class="logo">
                <router-link active-class="active-router" to="/">
                    <img src="../../../amado/img/core-img/logo.png" height="55" width="137"/>
                </router-link>
            </div>
            <!-- Amado Nav -->
            <nav class="amado-nav">
                <ul>
                    <li class="link">
                        <router-link active-class="active-router" to="/">Home</router-link>
                    </li>
                    <li class="link">
                        <router-link active-class="active-router" to="/aa">Shop</router-link>
                    </li>
                    <li class="link">
                        <router-link active-class="active-router" to="/">Product</router-link>
                    </li>
                    <li class="link">
                        <router-link active-class="active-router" to="/">Cart</router-link>
                    </li>
                    <li class="link">
                        <router-link active-class="active-router" to="/">Checkout</router-link>
                    </li>
                </ul>
            </nav>
            <!-- Button Group -->
            <div class="amado-btn-group mt-30 mb-100">
                <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                <a href="#" class="btn amado-btn active">New this week</a>
            </div>
            <!-- Cart Menu -->
            <div class="cart-fav-search mb-100">
                <router-link active-class="active-router" to="/" class="cart-nav">
                    <img src="/cart.png" alt=""> Cart <span>(0)</span>
                </router-link>
                <router-link active-class="active-router" to="/" class="fav-nav">
                    <img src="/favorites.png" alt=""> Favourite
                </router-link>
                <router-link active-class="active-router" to="/" class="search-nav">
                    <img src="/search.png" alt=""> Search
                </router-link>
            </div>
            <!-- Social Button -->
            <div class="social-info d-flex justify-content-between">
                <a href="#"><fa :icon="faBook" size="2x"/>asd</a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
    </div>
</template>

<script>

import Fa from 'vue-fa';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'SideBar',
  components: {
    Fa,

  },
  data() {
    return {
      faBook,

    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
