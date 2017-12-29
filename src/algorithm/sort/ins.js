/**
 * @desc 插入排序
 * @export
 * @param {array} arr
 * @param {boolean} reverse true: 降序 false || undefined: 升序
 */
export default function insSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let rightArr = arr.slice(i + 1, len)
    let curElement = arr[i]
    for (let j = i - 1; j > -1; j--) {
      let leftArr = arr.slice(0, j)
      if (arr[j] > curElement) {
        leftArr.push(curElement)
        rightArr.unshift(arr[j])
        arr = leftArr.concat(rightArr)
      } else {
        break
      }
    }
  }

  return arr
}
