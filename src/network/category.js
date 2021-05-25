import {request} from './request'
//请求分类列表数据
export function getCategory() {
  return request({
    url: '/category'
  })
}

//请求分类内容数据
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
//请求分类内容推荐商品数据
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}