class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length-1;

        while(start<=end){
            let mid = Math.floor((start+end)/2);
            let num = nums[mid];

            if(num===target) return mid;

            if(nums[start]<=num){
                if(nums[start]<=target && target<=num) end = mid;
                else start = mid+1;
            }else{
                if(num<=target && target<=nums[end]) start = mid;
                else end = mid-1;
            }
        }

        return -1;
    }
}
