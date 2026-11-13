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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let node = new ListNode();
        let head = node;

        while(list1 && list2){

            if(list1.val<=list2.val){
                node.next = list1;
                list1 = list1.next;
            }else{
                node.next = list2;
                list2 = list2.next;
            }

            node = node.next;
        }

        while(list1){
            node.next = list1;
            node = node.next;
            if(!list1.next) break;

            list1 = list1.next;
        }

        while(list2){
            node.next = list2;
            node = node.next;
            if(!list2.next) break;

            list2 = list2.next;
        }

        return head.next;
    }
}
