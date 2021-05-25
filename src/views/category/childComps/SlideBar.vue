<template>
  <div class="slide-bar">
    <ul class="slide-list">
      <li
        class="slide-item"
        v-for="(item, index) of category"
        :key="index"
        :class="{ active: index === curIndex }"
        @click="slideClick(item.maitKey, index ,item.miniWallkey)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  props: {
    category: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  components: {},
  methods: {
    //点击分类侧边栏设置选中后的样式，发送事件传递当前分类中的一些数据
    slideClick(maitKey, index, miniWallkey) {
      this.curIndex = index;
      this.$emit('slideClick',maitKey, index, miniWallkey);
    }
  },
};
</script>

<style scoped>
.slide-bar {
  width: 100px;
}

.slide-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f1f1f1;
}

.active {
  background-color: #fff;
}
</style>