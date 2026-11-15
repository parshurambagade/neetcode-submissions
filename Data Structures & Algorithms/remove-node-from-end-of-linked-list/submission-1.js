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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // let sentinel = new ListNode(0, head);
        // let slow = sentinel;
        // let fast = head;

        // for(let i=0; i<n; i++){
        //     fast = fast.next;
        // }

        // while(fast){
        //     fast = fast.next;
        //     slow = slow.next;
        // }

        // slow.next = slow.next.next;

        // return sentinel.next;

        let sentinel = new ListNode(0, head);
        let size = 0;
        let curr = head;

        while(curr){
            size++;
            curr = curr.next;
        }

        curr = sentinel;

        for(let i=0; i<size-n; i++){
            curr = curr.next;
        }

        curr.next = curr.next.next;

        return sentinel.next;
    }
}
