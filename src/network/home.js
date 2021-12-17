import { request } from './request';
const banners = require('../assets/json/banner.json')
const res = require('../assets/json/homeGoods.json')
export function getHomeMultidata() {
  return banners
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return res
  // return request({
  //   url: '/home/data',
  //   params: {
  //     type,
  //     page
  //   }
  // })
}