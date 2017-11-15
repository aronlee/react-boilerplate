import assert from 'assert'
import { getRomdomArr } from './util'
import bubSort from '../src/algorithm/sort/bub'
import selSort from '../src/algorithm/sort/sel'
import insSort from '../src/algorithm/sort/ins'

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

      bubSort(arr1_copy).forEach((item, index) => {
        assert.equal(item, arr1Ascending[index]);
      })

      bubSort(arr2_copy).forEach((item, index) => {
        assert.equal(item, arr2Ascending[index]);
      })

      bubSort(arr3_copy).forEach((item, index) => {
        assert.equal(item, arr3Ascending[index]);
      })
      
    });
  });

  // insSort
  describe('插入排序insSort()', function () {
    it('insSort 能把一个整数数组升序排列', function () {

      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      insSort(arr1_copy).forEach((item, index) => {
        assert.equal(item, arr1Ascending[index]);
      })

      insSort(arr2_copy).forEach((item, index) => {
        assert.equal(item, arr2Ascending[index]);
      })

      insSort(arr3_copy).forEach((item, index) => {
        assert.equal(item, arr3Ascending[index]);
      })
      
    });
  });

  // selSort
  describe('选择排序selSort()', function () {
    it('selSort 能把一个整数数组升序排列', function () {

      const arr1_copy = Object.assign([], arr1)
      const arr2_copy = Object.assign([], arr2)
      const arr3_copy = Object.assign([], arr3)

      selSort(arr1_copy).forEach((item, index) => {
        assert.equal(item, arr1Ascending[index]);
      })

      selSort(arr2_copy).forEach((item, index) => {
        assert.equal(item, arr2Ascending[index]);
      })

      selSort(arr3_copy).forEach((item, index) => {
        assert.equal(item, arr3Ascending[index]);
      })
      
    });
  });
});
