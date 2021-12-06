/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {

    const listsLength = lists.length

    let finishedSum = 0

    let result = null

    let answer = null

    while(finishedSum !== listsLength) {

        let min = lists[0]
        let minIndex = 0

        for (let i = 1; i < listsLength; i += 1) {

            const value = lists[i]

            if (value !== null && (min === null || value.val < min.val)) {

                min = value
                minIndex = i

            }

        }

        if (!min) {

            finishedSum += 1

            continue

        }

        if (result === null) {

            result = min

            answer = min

        } else {

            result.next = min

            result = min
        }

        const next = min.next

        if (!next) {

            finishedSum += 1

        }

        lists[minIndex] = next

    }

    return answer

};


// right way to solve

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */


 function mergeTwoLists (a, b) {

    let node = new ListNode(0)

    const result = node

    while (a !== null && b !== null) {

        if (a.val < b.val) {

            node.next = a

            a = a.next

        } else {

            node.next = b

            b = b.next
        }

        node = node.next

    }

    node.next = a || b

    return result.next

}

var mergeKLists = function(lists) {

    if (lists.length === 0) {

        return null

    }


    while(lists.length > 1) {

        const a = lists.shift()

        const b = lists.shift()

        const mergedAB = mergeTwoLists(a, b)

        lists.push(mergedAB)
    }

    return lists.pop()

};
