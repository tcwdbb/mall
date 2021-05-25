<template>
  <div class="sub-category-item">
    <a class="item-link" :href="subCategoryItem.link">
      <img class="item-image" :src="subCategoryItem.image" alt="">
      <h3 class="item-title">{{subCategoryItem.title}}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SubCategoryItem',
  props: {
    subCategoryItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .sub-category-item {
    flex: 1;
    width: 25%;
    min-width: 25%;
    max-width: 25%;
    margin: 11px;
    font-size: 12px;
    text-align: center;
  }

  .sub-category-item .item-link .item-image {
    width: 100%;
  }

  .item-title {
    padding-top: 8px;
  }
</style>