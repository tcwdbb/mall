import {debounce} from 'common/utils'
import {BACK_POSITION} from 'common/const';
import BackTop from "components/content/backtop/BackTop.vue";

export const imgListenerMixin = {
  data(){
    return {
      imgListener: null,
    }
  },
  mounted() {
    //函数防抖
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.imgListener = () => refresh();
    this.$bus.$on('imgLoadEnd', this.imgListener);
  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    //回到顶部
    backTopClick() {
      this.$refs.scroll.backTop(0, 0);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = position.y < BACK_POSITION;
    }
  }
}