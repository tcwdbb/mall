<template>
  <div class="sub-category-list">
    <sub-category-item
      v-for="(item, index) of subCategoryList"
      :key="index"
      :subCategoryItem="item"
    ></sub-category-item>
  </div>
</template>

<script>
import SubCategoryItem from "./SubCategoryItem";
export default {
  name: "SubCategoryList",
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    SubCategoryItem,
  },
};
</script>

<style scoped>
  .sub-category-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>