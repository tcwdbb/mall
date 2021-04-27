import {request} from './request'

export function getHomeMultiata() {
  return request({
    url: '/home/multidata'
  })
}