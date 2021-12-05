//https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {

    let leftBorder = 0
    let rightBorder = matrix.length - 1

    while (leftBorder < rightBorder) {

        const middleIndex = leftBorder + Math.ceil((rightBorder - leftBorder) / 2)
        const middleValue = matrix[middleIndex]

        if (middleValue[0] <= target && middleValue[middleValue.length - 1] >= target) {

            leftBorder = middleIndex
            rightBorder = middleIndex
        }

        if (middleValue[0] > target) {

            rightBorder = middleIndex - 1
        }

        if (middleValue[middleValue.length - 1] < target) {

            leftBorder = middleIndex + 1
        }
    }

    var binarySearch = function(nums, target) {

    let leftBorder = 0
    let rightBorder = nums.length - 1

    while (leftBorder <= rightBorder) {

        const middleIndex = leftBorder + Math.ceil((rightBorder - leftBorder) / 2)
        const middleValue = nums[middleIndex]

        if (middleValue === target) {

            return true
        }

        if (middleValue > target) {

            rightBorder = middleIndex - 1
        }

        if (middleValue < target) {

            leftBorder = middleIndex + 1
        }
    }

    return false
}

    const row = matrix[leftBorder]

    return row ? binarySearch(row, target) : false
};

const matrix = [[1],[3]], target = 13

console.log(searchMatrix(matrix, 4))
