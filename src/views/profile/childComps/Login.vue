<template>
  <div class="login clearfix">
    <div class="user-pic">
      <i class="iconfont user-icon">&#xe67c;</i>
    </div>
    <div class="user-info">
      <p>登录/注册</p>
      <p class="phone">
        <i class="iconfont">&#xe603;</i>
        <span>暂无绑定手机号</span>
      </p>
    </div>
    <div class="more-info">
      <i class="iconfont right-icon">&#xe613;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  .login {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    color: #fff;
    background-color: var(--color-tint);
  }

  .user-icon{
    font-size: 60px;
    background-color:#ddd;
    border-radius: 50%;
  }

  .user-info {
    margin-left: -35px;
    padding-top: 5px;
  }

  .phone {
    font-size: 14px;
  }

  .more-info {
    
  }

  .right-icon {
    position: absolute;
    right: 10px;
    padding-top: 5px;
    font-size: 30px;
    font-weight: bold;
    line-height: 45px;
  }
</style>