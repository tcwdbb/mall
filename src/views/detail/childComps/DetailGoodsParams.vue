<template>
  <div class="detail-goods-params" v-if="Object.keys(detailParams) != 0">
    <div class="size">
      <table v-for="(table, index) in detailParams.size" :key="index">
        <tr v-for="(tr, indextr) in table" :key="indextr">
          <td v-for="(td, indextd) in tr" :key="indextd">{{ td }}</td>
        </tr>
      </table>
    </div>
    <div class="rule">
      <table>
        <tr v-for="(item, index) in detailParams.set" :key="index">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-goods-params {
  padding: 0 6px;
  font-size: 14px;
}

.size table {
  width: 100%;
}

.size tr {
  display: flex;
  line-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.size td {
  flex: 1;
}

.rule table {
  width: 100%;
}

.rule td:nth-child(1) {
  width: 30%;
}

.rule td:nth-child(2n) {
  color: var(--color-high-text);
}

.rule tr {
  height: 40px;
  line-height: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.rule tr:nth-child(1) {
  border-top: 2px solid rgba(0, 0, 0, 0.05);
}
</style>