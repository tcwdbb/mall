<template>
  <div class="money">
    <div class="balance user">
      <p class="user-balance"><span>0.00</span>元</p>
      <p class="text">我的余额</p>
    </div>
    <div class="discounts user">
      <p class="user-discounts"><span>0</span>个</p>
      <p class="text">我的优惠</p>
    </div>
    <div class="integral user">
      <p class="user-integral"><span>0</span>分</p>
      <p class="text">我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Money'
}
</script>

<style scopde>
  .money {
    display: flex;
    height: 100px;
    border-bottom: 12px solid #ddd;
  }

  .user {
    padding-top: 15px;
    flex: 1;
    height: 100%;
    text-align: center;
  }

  .user span {
    color: red;
    font-size: 30px;
  }

  .user p {
    font-size: 14px;
  }

  .money div:nth-child(2) {
    border-left: 1px solid rgba(0, 0, 0, .1);
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
</style>