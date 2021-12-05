/*
14 ----

flatten без рекурсии
*/

function flat(array) {

    const stack = [array]

    const result = []

    while (stack.length > 0) {

        const stackItem = stack.pop()

        if (Array.isArray(stackItem)) {

            const lastIndex = stackItem.length - 1

            for (let i = lastIndex; i >= 0; i -= 1) {

                stack.push(stackItem[i])
            }

            continue
        }

        result.push(stackItem)
    }

    console.log(result)
}

flat([1, 2, [3, 4]])
// [1, 2, 3, 4]

flat([1, 2, [3, 4, [5, 6]]])
// [1, 2, 3, 4, 5, 6]

flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
