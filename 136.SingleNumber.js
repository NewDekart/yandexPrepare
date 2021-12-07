//https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {

    const length = nums.length

    let xor = nums[0]

    for (let i = 1; i < length; i += 1) {

        xor ^= nums[i]

    }

    return xor

};
