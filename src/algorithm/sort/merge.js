export default function mergeSort(arr) {
  const len = arr.length
  let spareArr = new Array(len)
  mergeSortInner(arr, 0, len - 1, spareArr)
  return arr
}

export function mergeSortInner(arr, start, end, spareArr) {
  if (end <= start)
    return
  let mid = Math.floor(start + (end - start) / 2)
  mergeSortInner(arr, start, mid, spareArr)
  mergeSortInner(arr, mid + 1, end, spareArr)
  mergeBetter(arr, start, mid, end, spareArr)
}


export function mergeSortNotRecursion(arr) {
  const len = arr.length
  let flag = 0
  let result = []
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr.slice(flag, i + 1)
      result = result.length ? merge(result, temp) : temp
      flag = i + 1
    }
  }
  result = merge(result, arr.slice(flag, len))
  return result
}

export function mergeBetter(arr, low, mid, high, spareArr) {
  let j = low, k = mid + 1

  for (let i = low; i <= high; i++) {
    spareArr[i] = arr[i]
  }

  for (let i = low; i <= high; i++) {
    if (j > mid) {
      arr[i] = spareArr[k++]
    } else if (k > high) {
      arr[i] = spareArr[j++]
    } else if (spareArr[j] <= spareArr[k]) {
      arr[i] = spareArr[j++]
    } else {
      arr[i] = spareArr[k++]
    }
  }
}

export function merge(arr1, arr2) {
  const len1 = arr1.length
  const len2 = arr2.length
  let mergeArr = []

  let i = 0, j = 0

  for (;;) {
    if (i === len1) {
      mergeArr = mergeArr.concat(arr2.slice(j, len2))
      break
    }
    if (j === len2) {
      mergeArr = mergeArr.concat(arr1.slice(i, len1))
      break
    }
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i])
      i += 1
    } else {
      mergeArr.push(arr2[j])
      j += 1
    }
  }
  return mergeArr
}


