<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" :probeType='3' ref="scroll" @curPosition="curPosition">
    <detail-swiper :swiperImgs="swiperImgs"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @imgLoadEnd="imgLoadEnd"></detail-goods-info>
    <detail-goods-params :detailParams="detailParams"></detail-goods-params>
    <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    <goods-list :goods="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-if="isShowBackTop"></back-top>
    
  </div>
  
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailGoodsParams from './childComps/DetailGoodsParams.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';


import {getGoodsInfo, Goods, Shop, GoodsParams, getRecommend} from 'network/detail'
import {imgListenerMixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll.vue';
import BackTop from 'components/content/backtop/BackTop.vue';
import GoodsList from 'components/content/goodslist/GoodsList.vue';








export default {
  name: "Detail",
  mixins:[imgListenerMixin],
  data() {
    return {
      iid: null,
      swiperImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParams: {},
      isShowBackTop: false,
      commentInfo: {},
      recommend: [],
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
    BackTop,
    DetailCommentInfo,
    GoodsList
   
  },
  methods: {
    //判断图片是否全部加载完成
    imgLoadEnd() {
      this.$refs.scroll.refresh();
    },
    //回到顶部
    backTopClick() {
      this.$refs.scroll.backTop(0, 0);
    },
    curPosition(position) {
      //根据当前位置判断backtop组件是否显示
      this.isShowBackTop = position.y < -1000;
    },
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.id;
    getGoodsInfo(this.iid).then(res => {
      //获取顶部轮播数据
      const data = res.result;
      this.swiperImgs = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services);
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详情
      this.detailInfo = data.detailInfo;
      //获取商品参数信息
      this.detailParams = new GoodsParams(data.itemParams.info, data.itemParams.rule);
      //获取评论信息
      if(data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      console.log(res);
    });
    //请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommend = res.data.list;
    })
  },
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off('imgLoadEnd', this.imgListener);
  }
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
    height: calc(100% - 44px);
    overflow: hidden;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
</style>