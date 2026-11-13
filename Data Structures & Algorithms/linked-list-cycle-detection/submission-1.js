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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while(slow){
            slow = slow.next;

            fast = fast && fast.next && fast.next.next;
            if(fast===null) return false;
            
            if(slow===fast) return true;
        }

        return false;
    }
}
