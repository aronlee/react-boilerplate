// 生成随机的个数为len， 0 - max的随机数
// max 不能小于len
function getRomdomArr(len = 12, max = 50) {
  if (len > max) {
    throw new error('max can\'t be bigger than len!')
  }
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * max)
  }
  return arr
}

export default {
  getRomdomArr
}