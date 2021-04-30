<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control v-show="isTabFiexd"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @curPosition="curPosition"
      @upLoadMore="loadMore"
      :pullUpLoad="true"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control v-show="!isTabFiexd"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <p v-if="loading" class="loading-more">加载更多...</p>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";
import {imgListenerMixin} from 'common/mixin'

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";


import { getHomeMultiata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  mixins: [imgListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      loading: false,
      tabOffsetTop: 0,
      isTabFiexd: false,
      saveY: 0,
      
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated(){
    //回到首页设置距顶部距离
    this.$refs.scroll.backTop(0,this.saveY,1);
    this.$refs.scroll.refresh();
  },
  //离开首页保存当前距顶部距离
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY();

    this.$bus.$off('imgLoadEnd', this.imgListener);
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultiata();
    //2. 请求商品列表信息
    this.getHomeGoods('pop');
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    //点击切换展示列表信息
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    /**
     * 点击回到顶部
     */
    backTopClick() {
      this.$refs.scroll.backTop(0, 0);
    },
    /**
     * 根据当前位置判断backtop组件是否显示
     */
    curPosition(position) {
      //根据当前位置判断backtop组件是否显示
      this.isShowBackTop = position.y < -1000;
      //判断tabControl是否吸顶
      this.isTabFiexd = position.y < -this.tabOffsetTop + 44;
    },
    /**
     * 下拉加载更多数据
     */
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.getHomeGoods(this.currentType)
      }, 200);
    },
    /**
     * 网络请求相关的方法
     */
    /**
     * 请求多个数据
     */
    getHomeMultiata() {
      getHomeMultiata().then(
        (res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    /**
     * 请求商品列表信息
     */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.list);

        this.loading = false;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  updated() {
    // this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
#home {
  /* position: relative; */
  height: 100vh;
  /* padding-top: 44px; */
}

#home .home-nav {
  color: #fff;
  background-color: var(--color-tint);
  /* position: sticky; */
  /* top: 0; */
  /* left: 0;
  right: 0; */
  /* z-index: 99; */
}

/* .tab-position {
  position: sticky;
  top: 44px;
} */

/* .content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
} */

.content {
  height: calc(100% - 93px);
  /* margin-top: 44px; */
  overflow: hidden;
}

.loading-more {
  font-size: 14px;
  text-align: center;
}
</style>