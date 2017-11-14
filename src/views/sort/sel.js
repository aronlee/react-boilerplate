/**
 * @desc 选择排序
 * @export
 * @param {array} arr 
 * @param {boolean} reverse true: 降序 false || undefined: 升序 
 */
export default function selSort(arr, reverse) {
  
    let len = arr.length;
  
    for (let i = 0; i < len; i++) {
      let minIdx = i
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j
        }
      }
      // 互换位置
      if (minIdx !== i) {
        let temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
      }
    }
  
    return arr
  }