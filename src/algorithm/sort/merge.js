export default function mergeSort(arr, reaverse) {

  const len = arr.length;
  let arrIt = [];
  let flag = 0;
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arrIt.push(arr.slice(flag, i + 1));
      flag = i + 1;
    }
  }
  arrIt.push(arr.slice(flag, len));

  let len2 = arrIt.length;
  let result = arrIt[0];
  for (let i = 1; i < len2; i++) {
    result = merge(result, arrIt[i]);
  }

  return result;

}


export function mergeSortNotRecursion(arr, reaverse) {
  const len = arr.length;
  let arrIt = [];
  let flag = 0;
  let result = [];
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr.slice(flag, i + 1);
      result = result.length ? merge(result, temp) : temp;
      flag = i + 1;
    }
  }
  result = merge(result, arr.slice(flag, len));
  return result;
}

export function merge(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let mergeArr = []

  let i = 0, j = 0;

  while (true) {
    if (i === len1) {
      mergeArr = mergeArr.concat(arr2.slice(j, len2))
      break;
    }
    if (j === len2) {
      mergeArr = mergeArr.concat(arr1.slice(i, len1))
      break;
    }
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);

      i += 1;
    } else {
      mergeArr.push(arr2[j]);
      j += 1;
    }
  }
  return mergeArr
}


