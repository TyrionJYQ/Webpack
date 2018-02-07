import {getHotKey} from './hot.js'

const ERR_OK = 0
document.getElementById('toggleShow').onclick = function() {
  // alert(1)
  getHotKey().then((res) => {
    if(res.code === ERR_OK) {
      console.log(_normiseData(res.data.hotkey))
    }
  })
} 


/* function getKey() {  //代码分割

  getHotKey().then((res) => {
    if(res.code === ERR_OK) {
      console.log(_normiseData(res.data.hotkey))
    }
  })
}
getKey() */

function _normiseData(data) {
  if(!data) {
    return
  }
  let ret = []
  for(let i = 0; i < data.length; i++) {
    ret.push(data[i].k)
  }
  return ret
}
export default 'hot'