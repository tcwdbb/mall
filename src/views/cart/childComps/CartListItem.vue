<template>
  <div class="cart-list-item clearfix">
    <check-button
      class="check-button"
      :isChecked="product.isChecked"
      @click.native="checked"
    ></check-button>
    <div class="item-img">
      <img v-lazy="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="item-bottom clearfix">
        <div class="item-price">¥{{ product.price }}</div>
        <div class="item-count">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checked() {
      this.product.isChecked = !this.product.isChecked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  position: relative;
  padding: 5px 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.check-button {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}

.cart-list-item .item-img {
  margin-left: 30px;
  padding: 5px 0;
}

.cart-list-item .item-img img {
  float: left;
  width: 80px;
  border-radius: 5px;
}

.item-info {
  float: left;
  width: calc(100% - 110px);
  padding: 0 10px;
  margin-top: -10px;
}

.item-info .item-title {
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 20px 0;
}

.item-info .item-bottom {
  padding-top: 10px;
}

.item-bottom .item-price {
  float: left;
  color: orange;
}

.item-bottom .item-count {
  float: right;
}
</style>