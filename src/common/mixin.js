import {debounce} from 'common/utils'

export const imgListenerMixin = {
  data(){
    return {
      imgListener: null
    }
  },
  mounted() {
    //函数防抖
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.imgListener = () => refresh();
    this.$bus.$on('imgLoadEnd', this.imgListener);
  }
}