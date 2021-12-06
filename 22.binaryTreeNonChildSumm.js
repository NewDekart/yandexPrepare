/*
22 ----

Дано бинарное дерево, значения в нем - числа. Нужно написать функцию, которая возвращает сумму всех узлов дерева, у которых нет потомков. Например, для дерева:

     5
    / \
   4   2
  / \   \
 1   6   3
        /
       7

Результатом будет число 14 (1 + 6 + 7).
*/

const tree = {
    value: 5,
    children: [
        {
            value: 4,
            children: [
                {
                    value: 1,
                    children: null
                },
                {
                    value: 6,
                    children: null
                }
            ]
        },
        {
            value: 2,
            children: [
                {
                    value: 3,
                    children: [
                        {
                            value: 7,
                            children: null
                        }
                    ]
                }
            ]
        }
    ]
}

const sumDepthFirstTraversal = (tree) => {

    const stack = [tree]

    let resultSum = 0

    while (stack.length > 0) {

        const node = stack.pop()

        if (node.children) {

            for (child of node.children) {
                stack.push(child)
            }

            continue
        }

        resultSum += node.value
    }

    return resultSum
}

const sumBreadthFirstTraversal = (tree) => {

    const queue = [tree]

    let resultSum = 0

    while (queue.length > 0) {

        const node = queue.shift()

        if (node.children) {

            for (child of node.children) {

                queue.push(child)

            }

            continue
        }

        resultSum += node.value
    }

    return resultSum

}

console.log(sumDepthFirstTraversal(tree))
console.log(sumBreadthFirstTraversal(tree))
