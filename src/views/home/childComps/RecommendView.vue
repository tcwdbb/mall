<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a class="item-lk" :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    padding: 8px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend .recommend-item{
    flex: 1;
  }

  .recommend .recommend-item .item-lk{
    font-size: 12px;
  }

  .recommend .recommend-item .item-lk img {
    width: 60px;
    margin-bottom: 3px;
  }
</style>