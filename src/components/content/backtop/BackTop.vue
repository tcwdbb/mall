<template>
  <div class="back-top">
    <i class="iconfont">&#xe672;</i>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top .iconfont {
    display: block;
    position: fixed;
    right: 10px;
    bottom: 56px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    color: var(--color-high-text);
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .05);
  }
</style>