<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(ObserveImage);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动并传出当前位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("curPosition", position);
        // this.$emit("curPosition1", position);
      });
    }
    //下拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("upLoadMore");
      });
    }
  },
  methods: {
    /**
     * 回到顶部
     */
    backTop(x, y, time = 200) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },

    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
};
</script>

<style>
</style>