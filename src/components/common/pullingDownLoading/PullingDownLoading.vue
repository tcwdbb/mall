<template>
  <div class="pulling-down-loading">{{downLoadingText}}</div>
</template>

<script>
export default {
  name: 'PullingDownLoading',
  props: {
    downLoadingText: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>
  
<style scoped>
  .pulling-down-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 44px;
    width: 100%;
    height: 50px;
    color: #999;
    font-size: 14px;
    z-index: -1;
  }
</style>