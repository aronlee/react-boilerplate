/**
 * @desc @1
 * zh:给定一个整数数列，找出其中和为特定值的那两个数。你可以假设每个输入都只会有一种答案，同样的元素不能被重用。
 * en:Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * @export
 * @param {any} nums
 * @param {any} target
 */
export function twoSum (nums, target) {
  let len = nums.length
  let x, y
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        x = i
        y = j
        break
      }
    }
  }
  return [x, y]
}
/**
 * @desc @3
 * zh:
 * 给定一个字符串，找出不含有重复字符的 最长子串 的长度。
 * 示例：
 * 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 * 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
 * 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串。
 *
 * @export
 * @param {any} s
 */
export function lengthOfLongestSubstring(s) {
  let len = s.length
  let maxLength = 0

  for (let start = 0; start < len; start++) {

    let last = len - 1

    for (let i = start; i < last; i++) {
      const cur = s.charAt(i)
      const rest = s.substring(i + 1, last + 1)
      const indexOf = rest.indexOf(cur)
      if (indexOf > -1) {
        last = i + indexOf
      }
      // console.log(`s: ${s}, start: ${start}, i: ${i}, cur: ${cur}, last: ${last}, rest: ${rest}`)
    }

    const long = last - start + 1
    maxLength = Math.max(maxLength, long)
    // console.log(`maxLength: ${maxLength}`)
  }


  return maxLength

}
