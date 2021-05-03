<template>
  <div class="base-info" v-if="Object.keys(goods) != 0">
    <div class="title-info">
      <h5>{{goods.title}}</h5>
    </div>
    <div class="price-info">
      <span class="price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc.length" class="discount-desc" :style="{backgroundColor: goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="other-info">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="service-info">
      <span class="service-info-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    
  }
}
</script>

<style scoped>
.base-info {
  padding: 6px;
}

.title-info h5{
  font-weight: normal;
  font-size: 15px;
  color: #222;
  line-height: 18px;
}

.price-info {
  padding: 7px 0;
}

.price-info .price {
  font-size: 20px;
  color: var(--color-high-text);
}

.price-info .old-price {
  font-size: 12px;
  margin-left: 4px;
  text-decoration: line-through;
  color: rgb(153, 153, 153);
}

.price-info .discount-desc {
  position: relative;
  left: 2px;
  top: -7px;
  padding: 2px 3px;
  font-size: 12px;
  color: #fff;
  border-radius: 10px;
}

.other-info {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 5px;
  border-bottom: 2px solid rgba(153, 153, 153, .1);
}

.other-info span {
  font-size: 12px;
  color: rgb(153, 153, 153);
}

.service-info {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 4px solid rgba(153, 153, 153, .1);
}

.service-info .service-info-item img{
  width: 12px;
  vertical-align: middle;
}

.service-info .service-info-item span {
  font-size: 12px;
}
</style>