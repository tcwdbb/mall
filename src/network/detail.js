import {request} from './request'

export function getGoodsInfo(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, services) {
    this.title = itemInfo.title;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.cFavs = shopInfo.cFavs
  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.set = info.set;
    this.size = rule.tables;
  }
}