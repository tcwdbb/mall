<template>
  <div class="cart-tool-bar clearfix">
    <div class="computed-info">
      <i class="iconfont" :class="{ active: isSelectAll }" @click="clickChecked">&#xe656;</i>
      <span class="all-check" >全选</span>
      <span>合计：¥{{ totalPrice }}</span>
    </div>
    <div class="computed-btn" @click="toCpmputed">去计算({{ getCheckedCount }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartToolBar",
  props: {
    cartList: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["cartListLen"]),
    //计算选中商品合计价格
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.isChecked;
        })
        .reduce((pre, item) => {
          return item.price * item.count + pre;
        }, 0)
        .toFixed(2);
    },
    //选中商品数量
    getCheckedCount() {
      return this.cartList.filter((item) => item.isChecked).length;
    },
    //判断是否全部选中
    isSelectAll() {
      return this.cartList.length === 0
        ? false
        : !this.cartList.find((item) => !item.isChecked);
    },
  },
  methods: {
    //点击选中全部或取消全部选中
    clickChecked() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.isChecked = false);
      }else {
        this.cartList.forEach(item => item.isChecked = true);
      }
    },
    toCpmputed() {
      if(!this.getCheckedCount) {
        this.$toast.show('没有选中商品');
      }
    }
  },
};
</script>

<style scoped>
.cart-tool-bar {
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding-left: 10px;
  background-color: rgba(192, 192, 192, 0.3);
  position: absolute;
  bottom: 49px;
  z-index: 40px;
}

.computed-info {
  float: left;
  /* width: 70%; */
  line-height: 30px;
}

.all-check {
  padding: 0 10px 0 2px;
}

.computed-btn {
  float: right;
  width: 25%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background-color: orange;
}

.active {
  color: red;
}
</style>