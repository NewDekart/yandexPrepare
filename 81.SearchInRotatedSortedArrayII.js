/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

    let leftBorder = 0
    let rightBorder = nums.length - 1

    while (leftBorder <= rightBorder) {

        const middleIndex = leftBorder + Math.ceil((rightBorder - leftBorder) / 2)
        const middleValue = nums[middleIndex]

        const leftValue = nums[leftBorder]
        const rightValue = nums[rightBorder]

        if (middleValue === target) {

            return true
        }

        if (middleValue > target) {

            if (rightValue < middleValue && leftValue > target) {

                leftBorder = middleIndex + 1

                continue
            }

            rightBorder = middleIndex - 1
        }

        if (middleValue < target) {

            if (leftValue > middleValue && rightValue < target) {

                rightBorder = middleIndex - 1

                continue
            }

            leftBorder = middleIndex + 1
        }
    }


    return false
};

const nums = [0,0,0,0,0,0,0], target = 0

console.log(search(nums, target))
