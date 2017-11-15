export default function mergeSort(arr, reaverse) {


}

const a = merge([1, 3, 6, 11, 88, 99], [2, 6, 11, 22, 44]);
console.log(a);

function merge(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  let mergeArr = []

  let i = 0, j = 0;

  while(true) {
    console.log(i, j, renderArr(mergeArr))
    if (i === len1 - 1) {
      console.log(renderArr(mergeArr), renderArr(arr2.slice(j, len2)))
      mergeArr.concat(arr2.slice(j, len2))
      break;
    }
    if (j === len2 - 1) {
      console.log(renderArr(mergeArr), renderArr(arr1.slice(i, len1)))
      mergeArr.concat(arr1.slice(i, len1))
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

// function getByIndex()
function renderArr(arr = []) {
  return `[ ${arr.join(', ')} ]`
}


