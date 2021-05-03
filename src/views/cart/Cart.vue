<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{ cartListLen }})</div>
      </template>
    </nav-bar>
    <scroll class="cart-list" ref="scroll" :probeType="3">
      <cart-list></cart-list>
    </scroll>
    <cart-tool-bar class="cart-tool-bar" :cartList="cartList"></cart-tool-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from 'components/common/scroll/Scroll.vue';

import { mapGetters } from "vuex";

import CartList from "./childComps/CartList.vue";
import CartToolBar from './childComps/CartToolBar.vue';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartToolBar,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartListLen","cartList"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}

.cart-list {
  height: calc(100% - 93px);
  overflow: hidden;
}

.cart-tool-bar {
  
}
</style>