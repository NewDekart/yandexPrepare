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
