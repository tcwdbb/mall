<template>
  <div>
    <transition name="toast">
    <div class="toast" v-if="isShow">{{message}}</div>
  </transition>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, time = 2000) {
      this.message = message;
      this.isShow = true;
      console.log(this.isShow);
      console.log(this);
      setTimeout(() => {
        this.isShow =false;
        this.message = '';
      }, time);
    }
  }
};
</script>

<style scoped>
.toast {
  position: absolute;
  display: inline-block;
  z-index: 9999;
  top: 50%;
  left: 50%;
  font-size: 14px;
  color: #fff;
  padding: 5px 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  transform: translate(-50%, -50%);
}

.toast-enter-active {
  transition: opacity .5s;
}
.toast-enter {
  opacity: 0;
}
.toast-leave-active {
  transition: opacity 1s;
}
.toast-leave-to {
  opacity: 0;
}
</style>