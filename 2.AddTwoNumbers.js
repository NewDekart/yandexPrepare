https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {

    let carry = 0

    let l1Node = l1
    let l2Node = l2

    let current = null

    let result = null

    while (l1Node || l2Node) {

        let val1 = 0
        let val2 = 0
        let sum = 0

        if (l1Node) {

            val1 = l1Node.val
            l1Node = l1Node.next
        }

        if (l2Node) {

            val2 = l2Node.val
            l2Node = l2Node.next
        }

        sum = val1 + val2 + carry

        carry = sum > 9 ? 1 : 0

        const digit = sum % 10

        const resultNode = new ListNode(digit)

        if (current) {

            current.next = resultNode

            current = current.next
        }

        if (!current) {

            current = resultNode
            result = current
        }
    }


    if (carry) {

        current.next = new ListNode(carry)

        currnet = current.next
    }

    return result

};
