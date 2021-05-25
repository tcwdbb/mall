<template>
  <div class="detail-bottom-bar clear-fix">
    <div class="bar-left left">
      <div class="service">
        <i class="iconfont service">&#xe69f;</i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="iconfont">&#xe70a;</i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="iconfont">&#xe628;</i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
  .detail-bottom-bar {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .05);
    /* z-index: 99; */
  }

  .bar-left {
    display: flex;
    width: 46%;
    padding-top: 5px;
  }

  .bar-left .service,.shop,.collect {
    flex: 1;
    text-align: center;
  }

  .bar-left span {
    font-size: 12px;
    display: block;
  }

  .bar-left .service .iconfont.service {
    color: var(--color-high-text);
  }

  .bar-left i {
    font-size: 25px;
  }

  .bar-right {
    width: 54%;
    height: 100%;
    /* text-align: center; */
  }

  .bar-right .cart,.buy {
    display: inline-block;
    height: 100%;
    line-height: 49px;
    font-size: 14px;
    text-align: center;
  }

  .bar-right .cart {
    width: 58%;
    background-color: yellow;
  }

  .bar-right .buy {
    width: 42%;
    color: #fff;
    background-color: pink;
  }
</style>