//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    const map = {}

    const length = nums.length

    for (let i = 0; i < length; i += 1) {

        const value = nums[i]

        const mapValue = map[value]

        if (mapValue === undefined) {

            map[target - value] = i

            continue

        } else {

            return [mapValue, i]

        }

    }

}
