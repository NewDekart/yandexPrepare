//https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {

    let node = head
    let result = null

    while (node) {
        const next = node.next

        node.next = result

        result = node

        node = next
    }

    return result
};
