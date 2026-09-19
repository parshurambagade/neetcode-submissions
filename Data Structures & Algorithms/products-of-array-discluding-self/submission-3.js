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

        for(let i=1; i<length; i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(let i=length-2; i>=0; i--){
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        for(let i=0; i<length; i++){
            result[i] = suffix[i] * prefix[i];
        }

        return result;
    }
}
