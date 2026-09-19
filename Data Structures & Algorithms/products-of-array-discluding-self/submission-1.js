class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let productWithoutZero = 1;

       for(let num of nums){
        productWithoutZero *= num ? num : 1;
       }

       let result = new Array(nums.length).fill(0);

        let zerosCount = 0;
       
        for(let i=0; i<nums.length; i++){
            if(nums[i]===0) zerosCount++;
        }

        if(zerosCount>1){
            return result;
        }else if(zerosCount===1){
            result[nums.indexOf(0)] = productWithoutZero;
            return result;
        }else{

            for(let i=0; i<nums.length; i++){
                result[i] = productWithoutZero/nums[i];
            }

            return result;
        }
    }
}
