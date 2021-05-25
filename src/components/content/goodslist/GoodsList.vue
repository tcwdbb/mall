<template>
  <div class="goods-list">
    <goods-item class="goods-item" v-for="(item, index) in goods" :goodsItem='item' :key="index"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  components: {
    GoodsItem,
  },
};
</script>

<style>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
  }
</style>