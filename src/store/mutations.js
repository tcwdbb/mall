import {ADD_COUNT, ADD_TO_CART} from './mutations-type'

export default {
  [ADD_COUNT](state, payLoad) {
    payLoad.count++;
  },
  [ADD_TO_CART](state, payLoad) {
    payLoad.isShowHint = true;
    state.cartList.push(payLoad);
  }
}