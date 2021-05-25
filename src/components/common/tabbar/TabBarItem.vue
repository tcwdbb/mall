<template>
    <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      activeColor: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    } 
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    justify-items: center;
    height: 49px;
    padding-top: 6px;
  }

  .tab-bar-item .iconfont{
    display: block;
    font-size: 24px;
    font-style: normal;
  }

  .tab-bar-item .text{
    margin: 0;
    padding: 0;
    margin-top: -1px;
    font-size: 12px;
  }
  .tab-bar-item.active{
    color: red;
  }
</style>