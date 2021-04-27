<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';

import {getHomeMultiata} from 'network/home';



export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultiata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends =res.data.recommend.list;
    },err => {
      console.log(err);
    })
  }
}
</script>

<style>
  #home .home-nav{
    color: #fff;
    background-color: var(--color-tint);
  }
</style>