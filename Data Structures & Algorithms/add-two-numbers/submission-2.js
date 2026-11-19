/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let result = new ListNode(0), curr = result;

        let carry = 0;

        while(l1 || l2 || carry){
            let sum = carry;
            sum += l1?.val || 0;
            sum += l2?.val || 0;

            carry = Math.floor(sum/10);

            let node = new ListNode(sum%10);
            curr.next = node;

            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
            curr = curr.next;
        }

        return result.next;
    }
}
