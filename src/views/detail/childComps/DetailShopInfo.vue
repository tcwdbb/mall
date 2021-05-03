<template>
  <div class="shop" v-if="Object.keys(shop) != 0">
    <div class="shop-name-info">
      <img class="logo" :src="shop.shopLogo" alt="" />
      <h4 class="shop-name">{{shop.name}}</h4>
    </div>
    <div class="shop-info">
      <div class="shop-info-left">
        <div class="c-sells">
          <span>{{shop.cSells | sellFilter}}</span>
          <p class="text">总销量</p>
        </div>
        <div class="c-goods">
          <span>{{shop.cGoods}}</span>
          <p class="text">全部宝贝</p>
        </div>
        <div class="line"></div>
      </div>
      <div class="shop-info-right">
        <p class="score" v-for="(item, index) in shop.score" :key="index">
          <span class="score-name">{{item.name}}</span>
          <span class="score-number" :class="{'better-text': item.isBetter}">{{item.score}}</span>
          <span class="score-better" :class="{'better': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </p>
      </div>
    </div>
    <div class="shop-lk-wrap">
      <a class="shop-lk">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellFilter(val) {
      if(val <10000) return val;
      return (val/10000).toFixed(1) + '万'
    }
  }
};
</script>

<style scoped>
  .shop {
    padding: 6px;
  }

  .shop .shop-name-info .logo {
    width: 45px;
    border: 2px solid rgba(0, 0, 0, .05);
    border-radius: 50%;
    vertical-align: middle;
  }

  .shop .shop-name-info .shop-name {
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
  }

  .shop .shop-info {
    display: flex;
    /* font-size: 12px; */
    padding-top: 20px;
  }

  .shop .shop-info .shop-info-left {
    display: flex;
    flex: 1;
    padding-top: 10px;
    text-align: center;
    
  }

  .shop-info .shop-info-left .text {
    margin-top: 8px;
    line-height: 12px;
    font-size: 12px;
  }

  .line {
   height: 40px;
   border-left: 1px solid rgba(0, 0, 0, .1);
  }

  .shop-info .shop-info-left .c-sells,.c-goods {
    flex: 1;
  }

  .shop-info .shop-info-right {
    flex: 1;
  }

  .shop-info-right .score {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding-left: 10px;
    text-align: center;
  }

  .shop-info-right .score span {
    flex: 1;
    line-height: 12px;
    margin-bottom: 10px;
  }

  .score-number {
    color: green;
  }

  .score-better {
    color: #fff;
    background-color: green;
  }

  .better {
    background-color: red;
  }

  .better-text {
    color: red;
  }

  .shop-lk-wrap {
    text-align: center;
    /* margin-top: 20px 0; */
    padding: 20px 0 30px 0;
    border-bottom: 4px solid rgba(0, 0, 0, .05);
  }

  .shop-lk {
    font-size: 16px;
    padding: 8px 50px;
    background-color: rgba(0, 0, 0, .08);
    border-radius: 16px;
  }
</style>