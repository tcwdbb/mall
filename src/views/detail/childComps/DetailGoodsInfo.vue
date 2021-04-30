<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo) != 0">
    <div v-for="(item1, index1) in detailInfo.detailImage" :key="index1">
      <div class="desc">
      <div class="left-style">
        <i class="block"></i>
        <i class="line"></i>
      </div>
      <p class="desc-text">{{ detailInfo.desc }}</p>
      <div class="right-style">
        <i class="line"></i>
        <i class="block"></i>
      </div>
    </div>
    <p class="detailImageKey">{{ item1.key }}</p>
    <img
      class="detailImage"
      v-for="(item2, index2) in item1.list"
      :src="item2"
      alt=""
      :key="index2"
      @load="imgLoadEnd"
    />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoadEnd() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
      if(++this.count === this.imgLength) {
        this.$emit('imgLoadEnd')
      }
    }
  }
};
</script>

<style scoped>
.detail-goods-info {
  width: 100%;
}

.desc {
  position: relative;
  width: 100%;
  padding: 0 6px;
}

.desc i {
  display: inline-block;
  font-size: 0;
}
.desc .left-style,
.right-style {
  width: 30%;
}

.desc .right-style {
  position: absolute;
  right: 6px;
  bottom: 0;
}
.desc .block {
  height: 5px;
  width: 5px;
  background-color: black;
}

.desc .line {
  width: calc(100% - 5px);
  border-top: 2px solid rgba(0, 0, 0, 0.2);
}

.desc .desc-text {
  font-size: 13px;
  padding: 10px 0 15px;
}

.detailImageKey {
  padding: 8px 6px;
  font-size: 14px;
}

.detailImage {
  width: 100%;
}
</style>