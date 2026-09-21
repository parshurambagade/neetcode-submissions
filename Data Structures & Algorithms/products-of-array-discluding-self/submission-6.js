class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
        let prefix = new Array(length).fill(1);
        let suffix = new Array(length).fill(1);
        let result = new Array(length).fill(1);

        // prepare prefix array
        for(let i=1; i<length; i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        // prepare suffix array
        for(let i=length-2; i>=0; i--){
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        // prepare a result array
        for(let i=0; i<length; i++){
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
