<template>
  <div class="goods-item" @click="itemClick">
    <img class="goods-img" :src="showImage" alt="" @load="loadEnd">
    <div class="goods-info">
      <h5 class="title">{{goodsItem.title}}</h5>
      <span class="price">{{goodsItem.price}}</span>
      <i class="iconfont">&#xe628;</i>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    loadEnd() {
      this.$bus.$emit('imgLoadEnd');
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid);
    }
  }
}
</script>

<style>
  .goods-item {
    position: relative;
    width: 50%;
    padding: 5px 5px 40px;
  }

  .goods-item .goods-img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-item .goods-info {
    position: absolute;
    bottom: 5px;
    width: 100%;
    padding: 0 5px;
    font-size: 14px;
    text-align: center;
  }

  .goods-item .goods-info .title {
    font-style: normal;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .goods-item .goods-info .price {
    color: var(--color-high-text);
  }

  .goods-item .goods-info .iconfont {
    font-size: 13px;
    margin: 0 3px;
  }
</style>