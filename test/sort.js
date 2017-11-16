import assert from 'assert'
import { getRomdomArr } from './util'
import bubSort from '../src/algorithm/sort/bub'
import selSort from '../src/algorithm/sort/sel'
import insSort from '../src/algorithm/sort/ins'
import mergeSort, { merge, mergeSortNotRecursion } from '../src/algorithm/sort/merge'

describe('bub sort function may right!', function () {

  function sortNum(a, b) {
    return a - b
  }
  const arr1 = getRomdomArr(10, 100)
  const arr1Ascending = Object.assign([], arr1).sort(sortNum)
  const arr2 = getRomdomArr(12, 80)
  const arr2Ascending = Object.assign([], arr2).sort(sortNum)
  const arr3 = getRomdomArr(22, 200)
  const arr3Ascending = Object.assign([], arr3).sort(sortNum)
  
  // bubSort
  describe('冒泡排序bubSort()', function () {
    it('bubSort 能把一个整数数组升序排列', function () {

      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      assert.deepEqual(bubSort(arr1_copy), arr1Ascending);
      assert.deepEqual(bubSort(arr2_copy), arr2Ascending);
      assert.deepEqual(bubSort(arr3_copy), arr3Ascending);
      
    });
  });

  // insSort
  describe('插入排序insSort()', function () {
    it('insSort 能把一个整数数组升序排列', function () {

      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      assert.deepEqual(insSort(arr1_copy), arr1Ascending);
      assert.deepEqual(insSort(arr2_copy), arr2Ascending);
      assert.deepEqual(insSort(arr3_copy), arr3Ascending);

    });
  });

  // selSort
  describe('选择排序selSort()', function () {
    it('selSort 能把一个整数数组升序排列', function () {

      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      assert.deepEqual(selSort(arr1_copy), arr1Ascending);
      assert.deepEqual(selSort(arr2_copy), arr2Ascending);
      assert.deepEqual(selSort(arr3_copy), arr3Ascending);
      
    });
  });

  // mergeSort
  describe('归并排序mergeSort()', function () {

    it('merge 能把两个升序整数数组合并到一个升序数组中', function () {
      assert.deepEqual([1, 2, 2, 8, 9, 11, 13, 15, 25, 34, 54, 65, 78, 87, 100, 102], merge([2, 9, 11, 15, 54, 78, 100], [1, 2, 8, 13, 25, 34, 65, 87, 102]));
    });

    it('非递归 归并排序方法 mergeSortNotRecursion 能把一个整数数组升序排列', function () {
      
      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      assert.deepEqual(mergeSortNotRecursion(arr1_copy), arr1Ascending);
      assert.deepEqual(mergeSortNotRecursion(arr2_copy), arr2Ascending);
      assert.deepEqual(mergeSortNotRecursion(arr3_copy), arr3Ascending);

    })

    it('mergeSort 能把一个整数数组升序排列', function () {
      
      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      assert.deepEqual(mergeSort(arr1_copy), arr1Ascending);
      assert.deepEqual(mergeSort(arr2_copy), arr2Ascending);
      assert.deepEqual(mergeSort(arr3_copy), arr3Ascending);

    });

  });
});
