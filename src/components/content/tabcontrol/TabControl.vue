<template>
  <div class="tab-control">
    <div class="tab-item" v-for="(item, index) in titles" :key="index" @click="activeStyle(index)">
      <span class="tab-title" :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    //点击改变当前tab样式
    activeStyle(index){
      this.currentIndex = index;
      //发送事件传递下标（请求新的数据）
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style>
  .tab-control {
    /* position: sticky; */
    display: flex;
    /* top: 44px; */
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    z-index: 98;
    background: #fff;
  }

  .tab-control .tab-item {
    flex: 1;
  }

  .tab-control .tab-item .tab-title {
    padding: 0 4px 2px;
  }

  .tab-control .tab-item .tab-title.active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>