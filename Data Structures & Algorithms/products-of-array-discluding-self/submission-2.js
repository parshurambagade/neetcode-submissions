class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
        let prefixFromStart = new Array(length);
        let prefixFromEnd = new Array(length);

        prefixFromStart[0] = nums[0];
        prefixFromEnd[length-1] = nums[length-1];

        for(let i=1; i<length; i++){
            prefixFromStart[i] = prefixFromStart[i-1] * nums[i];
        }

        for(let i=length-2; i>=0; i--){
            prefixFromEnd[i] = prefixFromEnd[i+1] * nums[i];
        }

        let result = new Array(length);

        result[0] = prefixFromEnd[1];
        result[length-1] = prefixFromStart[length-2];

        for(let i=1; i<length-1; i++){
            result[i] = prefixFromStart[i-1] * prefixFromEnd[i+1];
        }

        return result;
    }
}
