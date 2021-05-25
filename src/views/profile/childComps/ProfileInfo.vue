<template>
  <div class="profile-info">
    <div>
      <i class="iconfont">&#xe857;</i>
      <p class="text">我的消息</p>
    </div>
    <div class="mall">
      <i class="iconfont">&#xe65e;</i>
      <p class="text">积分商城</p>
    </div>
    <div>
      <i class="iconfont">&#xe638;</i>
      <p class="text">会员卡</p>
    </div>
    <div class="cart">
      <i class="iconfont">&#xe63f;</i>
      <p class="text">我的购物车</p>
    </div>
    <div>
      <i class="iconfont">&#xe60a;</i>
      <p class="text">下载购物APP</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style scoped>
  .profile-info .text,i{
    display: inline-block;
    height: 35px;
    line-height: 35px;
    font-size: 16px
  }

  .profile-info div {
    display: flex;
  }

  .text {
    flex: 1;
  }

  .profile-info i {
    width: 30px;
    margin-left: 10px;
    font-size: 18px;
    color: var(--color-high-text);
  }

  .mall .text {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .profile-info div:nth-child(3) {
    height: 47px;
    border-bottom: 12px solid #ddd;
  }

  .cart .text {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
</style>