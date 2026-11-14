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
     * @return {void}
     */
    reorderList(head) {

        // find the second part's head and reverse the second part.
        let slow = head;
        let fast = head.next;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;

        slow.next = null;
        let prev = null, curr = second;

        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }


        // merge two parts
        let curr1 = head, curr2 = prev; // prev is where the head of reversed second list is
        
        while(curr1 && curr2){
            let next1 = curr1.next, next2 = curr2.next;

            curr1.next = curr2;
            curr2.next = next1;
            curr1 = next1;
            curr2 = next2;
        }
    }
}


