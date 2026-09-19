class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length; 
        let result = new Array(length).fill(1);

        for(let i=1; i<length; i++){
            result[i] = result[i-1] * nums[i-1];
        }
        
        let suffix = 1;

        for(let i=length-2; i>=0; i--){
            suffix *= nums[i+1];
            result[i] *= suffix;
        }

        return result;
    }
}
