// import jquery from 'jquery'
import jsonp from './jsonp'
let options = {
  param: 'jsonpCallback',
  prefix: 'jp'
}
export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
    uin: 0,
    g_tk: 5381,
    format: 'json',
    paltform: 'h5',
    needNewCode: 1
  }
  return jsonp(url, data, options)
}