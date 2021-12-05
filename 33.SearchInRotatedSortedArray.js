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

            return middleIndex
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


    return -1
};

const nums = [4,5,6,7,0,1,2], target = 3

console.log(search(nums, target))
