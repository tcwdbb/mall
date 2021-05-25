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
      @onPullingDown="onPullingDown"
      :pullDownRefresh="{
        threshold: 50,
        stop: 50
      }"
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
      <!-- <p v-if="loading" class="loading-more">加载更多...</p> -->
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <pulling-up-loading :loadingText="loadingText"></pulling-up-loading>
    <pulling-down-loading :downLoadingText="downLoadingText"></pulling-down-loading>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goodslist/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import PullingUpLoading from 'components/common/pullingUpLoading/PullingUpLoading.vue';
import PullingDownLoading from 'components/common/pullingDownLoading/PullingDownLoading.vue';
import {imgListenerMixin, backTopMixin, switchCurTypeMixin} from 'common/mixin';

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultiata, getHomeGoods } from "network/home";
import { UP_LOADING_TEXT, DOWN_LOADING_TEXT} from 'common/const'


export default {
  name: "Home",
  mixins: [imgListenerMixin, backTopMixin, switchCurTypeMixin],
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
      loading: false,
      tabOffsetTop: 0,
      isTabFiexd: false,
      saveY: 0,
      loadingText: '',
      downLoadingText: ''
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
    PullingUpLoading,
    PullingDownLoading,
  },
  created() {
   this.loadingData();
  },
  mounted() {
    
  },
  methods: {
    loadingData () {
      // 1.请求多个数据
    this.getHomeMultiata();
    //2. 请求商品列表信息
    this.getHomeGoods('pop');
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    },
    /**
     * 事件监听相关的方法
     */
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    //点击切换展示列表信息
    tabClick(index) {
      this.switchCurType(index);
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    /**
     * 根据当前位置判断backtop组件是否显示
     */
    curPosition(position) {
      //根据当前位置判断backtop组件是否显示
      this.listenShowBackTop(position)
      //判断tabControl是否吸顶
      this.isTabFiexd = position.y < -this.tabOffsetTop + 44;
    },
    /**
     * 上拉加载更多数据
     */
    loadMore() {
      this.loadingText = UP_LOADING_TEXT;
        setTimeout(() => {
          this.getHomeGoods(this.currentType);
        }, 1000);
    },
    //下拉刷新
    onPullingDown() {
      this.downLoadingText = DOWN_LOADING_TEXT.PULLING;
      this.loadingData();
      setTimeout(() => {
        this.downLoadingText = DOWN_LOADING_TEXT.FINISH;
        setTimeout(() => {
          this.$refs.scroll.finishPullDown();
          this.downLoadingText = DOWN_LOADING_TEXT.ORIGIN;
        }, 500);
      }, 1000);
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
          //轮播图数据
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

        // this.loading = false;
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
  height: 100vh;
}

#home .home-nav {
  font-size: 16px;
  color: #fff;
  background-color: var(--color-tint);
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}

.loading-more {
  font-size: 14px;
  text-align: center;
}
</style>