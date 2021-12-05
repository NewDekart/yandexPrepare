var search = function(nums, target) {

    let leftBorder = 0
    let rightBorder = nums.length - 1

    while (leftBorder <= rightBorder) {

        const middleIndex = leftBorder + Math.ceil((rightBorder - leftBorder) / 2)
        const miiddleValue = nums[middleIndex]

        if (miiddleValue === target) {
            return middleIndex
        }

        if (miiddleValue > target) {
            rightBorder = middleIndex - 1
        }

        if (miiddleValue < target) {
            leftBorder = middleIndex + 1
        }
    }

    return -1

};

const nums = [], target = 0

console.log(search(nums, target))
