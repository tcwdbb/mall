<template>
  <div class="check-button" >
    <i class="iconfont" :class="{ 'check': isChecked }">&#xe656;</i>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
      isChecked: {
        type: Boolean,
        default() {
          return false
        }
    }
  }
}
</script>

<style scoped>
  .check {
    color: red
  }
</style>