/*5 ----

/**
 *
 *      1
 *    /   \
 *   2     3
 *  / \   /
 * 4   5 6
 *
 **
Дано дерево, вывести его в глубину и в ширину
В глубину: 1 2 4 5 3 6
В ширину: 1 2 3 4 5 6
dump({
    "value": 1,
    "children": [
        {
            "value": 2,
            "children": [
                {
                    "value": 4
                },
                {
                    "value": 5
                }
            ]
        },
        {
            "value": 3,
            "children": [
                {
                    "value": 6
                }
            ]
        }
    ]
});*/

function depthTraversal(tree) {

    console.log('depth traversal:')

    const stack = [ tree ]

    while (stack.length) {

        const node = stack.pop()

        console.log(node.value)

        if (node.children) {

            node.children.forEach((child) => {

                stack.push(child)
            })
        }
    }

}

function breadthTraversal(tree) {

    console.log('breadth traversal:')

    const queue = [ tree ]

    while (queue.length) {

        const node = queue.shift()

        console.log(node.value)

        if (node.children) {

            node.children.forEach((child) => {

                queue.push(child)
            })
        }
    }
}

function dump(tree) {
    depthTraversal(tree)
    breadthTraversal(tree)
}

dump({
    "value": 1,
    "children": [
        {
            "value": 2,
            "children": [
                {
                    "value": 4
                },
                {
                    "value": 5
                }
            ]
        },
        {
            "value": 3,
            "children": [
                {
                    "value": 6
                }
            ]
        }
    ]
})
