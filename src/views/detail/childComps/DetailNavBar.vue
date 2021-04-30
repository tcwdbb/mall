<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back" @click="backClick">&lt;</div>
    </template>
    <template v-slot:center>
      <div class="title">
        <span
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === curIndex }"
          @click="activeClick(index)"
          >{{ item }}</span
        >
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      curIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    activeClick(index) {
      this.curIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  },
};
</script>

<style>
.back {
  font-size: 20px;
}

.title {
  display: flex;
}

.title .title-item {
  flex: 1;
  font-size: 13px;
}

.active {
  color: var(--color-high-text);
}
</style>