<template>
  <div class="pulling-up-loading">
    {{loadingText}}
  </div>
</template>

<script>
export default {
  name: 'PullingUpLoading',
  props: {
    loadingText: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style scoped>
  .pulling-up-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 49px;
    width: 100%;
    height: 50px;
    color: #999;
    font-size: 14px;
    z-index: -1;
  }
</style>