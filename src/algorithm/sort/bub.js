/**
 * @desc 冒泡排序
 * @export
 * @param {array} arr 
 * @param {boolean} reverse true: 降序 false || undefined: 升序 
 */
export default function bubSort(arr, reverse) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}