import assert from 'assert'
import { twoSum, lengthOfLongestSubstring } from '../src/leetcode'

describe('leetcode所有的解答都要是通过的!', function () {

  const allTestCase = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
      result: [0, 1],
    },
    {
      nums: [11, 22, 19, 176],
      target: 198,
      result: [1, 3],
    },
    {
      nums: [5, 7, 19, 37, 53, 97],
      target: 90,
      result: [3, 4],
    },
    {
      nums: [2, 3, 5, 7, 13, 29, 43, 71, 101, 161],
      target: 130,
      result: [5, 8],
    },
  ]

  // bubSort
  describe('1、两数之和twoSum()', function () {
    it('测试通过!', function () {

      allTestCase.forEach(item => {
        assert.deepEqual(twoSum(item.nums, item.target), item.result);
      })

    });
  });

  // lengthOfLongestSubstring
  describe('3、无重复字符的最长子串lengthOfLongestSubstring()', function () {
    it('测试通过!', function () {

      assert.deepEqual(lengthOfLongestSubstring('abcabcbb'), 3);
      assert.deepEqual(lengthOfLongestSubstring('bbbbb'), 1);
      assert.deepEqual(lengthOfLongestSubstring('pwwkew'), 3);
      assert.deepEqual(lengthOfLongestSubstring('adsfebqweoadfuebdafersabcdefghijklmnopqrstuvwxyz.?[]{dadcejf'), 31);

    });
  });

});
