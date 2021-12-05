//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {

    let leftBorder = 0
    let rightBorder = nums.length - 1

    while(leftBorder < rightBorder) {

        const middleIndex = leftBorder + Math.ceil((rightBorder - leftBorder) / 2)
        const middleValue = nums[middleIndex]

        const leftValue = nums[leftBorder]
        const rightValue = nums[rightBorder]

        if (rightValue > middleValue) {

            rightBorder = middleIndex
        } else {

            leftBorder = middleIndex
        }

        if (middleValue === rightValue || middleValue === leftValue) {

            return Math.min(rightValue, leftValue)
        }
    }

    return nums[leftBorder]
};

const nums = [3, 1, 2]
const nums1 = [2, 1]
const nums2 = [3,4,5,1,2]
const nums3 = [4,5,6,7,0,1,2]
const nums4 = [11,13,15,17]

console.log(findMin(nums))
console.log(findMin(nums1))
console.log(findMin(nums2))
console.log(findMin(nums3))
console.log(findMin(nums4))
