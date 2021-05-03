import {ADD_COUNT, ADD_TO_CART} from './mutations-type'

export default {
  addCart({state, commit}, payLoad) {
    return new Promise((resolve, reject) => {
      let oldProduct= state.cartList.find(item => item.iid === payLoad.iid)
      if(oldProduct) {
        commit(ADD_COUNT, oldProduct);
        resolve('当前的商品数量+1');
      }else {
        payLoad.count = 1;
        commit(ADD_TO_CART,payLoad);
        resolve('添加购物车成功');
      }
    })
 }
}