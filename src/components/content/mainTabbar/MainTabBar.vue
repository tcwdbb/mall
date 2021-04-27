<template>
  <tab-bar>
      <tab-bar-item path="/home" >  <!-- 添加activeColor = 'blue' 动态设置活跃状态颜色 -->
        <template v-slot:icon>
          <i class="iconfont">&#xe60b;</i>
        </template>
        <template v-slot:text>
          <p class="text">首页</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:icon>
          <i class="iconfont">&#xe7f8;</i>
        </template>
        <template v-slot:text>
          <p class="text">分类</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:icon>
          <i class="iconfont">&#xe63f;</i>
        </template>
        <template v-slot:text>
          <p class="text">购物车</p>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <i class="iconfont">&#xe617;</i>
        </template>
        <template v-slot:text>
          <p class="text">我的</p>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>