<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @tabClick="tabClick"
      ref="detailNav"
    ></detail-nav-bar>
    <scroll
      class="content"
      :probeType="3"
      ref="scroll"
      @curPosition="curPosition"
    >
      <detail-swiper :swiperImgs="swiperImgs"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imgLoadEnd="imgLoadEnd"
      ></detail-goods-info>
      <detail-goods-params
        ref="params"
        :detailParams="detailParams"
      ></detail-goods-params>
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-if="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailGoodsParams from "./childComps/DetailGoodsParams.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';
import {
  getGoodsInfo,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";
import { imgListenerMixin,backTopMixin } from "common/mixin";
import { debounce } from "common/utils";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goodslist/GoodsList.vue";

import {mapActions} from 'vuex'



export default {
  name: "Detail",
  mixins: [imgListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      swiperImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParams: {},
      commentInfo: {},
      recommend: [],
      curTabIndex: 0,
      themeTopYs: [],
      getThemeTopY: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  methods: {
    ...mapActions(['addCart']),
    //判断图片是否全部加载完成
    imgLoadEnd() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
      console.log(this.themeTopYs);
    },
    // //回到顶部
    // backTopClick() {
    //   this.$refs.scroll.backTop(0, 0);
    // },
    curPosition(position) {
      //根据当前位置判断backtop组件是否显示
      this.listenShowBackTop(position)
      const positionY = -position.y;

      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if(this.curTabIndex != i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])){
          this.curTabIndex = i;
          this.$refs.detailNav.curIndex = this.curTabIndex;
        }
        
      }
      
    },
    //点击移动到指定位置
    tabClick(index) {
      this.curTabIndex = index;
      this.$refs.scroll.backTop(0, -this.themeTopYs[index])
    },
    //添加购物车数据
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.image = this.swiperImgs[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.isChecked = true;
      //购物车添加成功提示
      this.addCart(product).then(res => {
        this.$toast.show(res, 1500);
        
      })
      // this.$store.dispatch('addToCart', product).then(res => {
      //   setTimeout(() => {
      //   this.isShowHint = true;
      // }, 800);
      // })
    }
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.id;
    getGoodsInfo(this.iid).then((res) => {
      //获取顶部轮播数据
      const data = res.result;
      this.swiperImgs = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详情
      this.detailInfo = data.detailInfo;
      //获取商品参数信息
      this.detailParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      console.log(res);
    });
    //请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommend = res.data.list;
    });

    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
    },200);
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("imgLoadEnd", this.imgListener);
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1000;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}

.detail-nav-bar {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>