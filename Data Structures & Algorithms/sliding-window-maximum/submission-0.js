class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       const result = [];
       const deque = [];

       for(let i=0; i<nums.length; i++){
        if(deque.length && deque[0]<=i-k) deque.shift();

        while(deque.length && nums[deque.at(-1)]<=nums[i]) deque.pop();

        deque.push(i);

        if(i>=k-1){
            result.push(nums[deque[0]]);
        }
       }

       return result;   
    }
}
