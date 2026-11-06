class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let minimum = nums[0];

        while (left <= right) {
        
                let mid = Math.floor((left + right) / 2);

                // left is sorted
                if (nums[left] <= nums[mid]) {
                    minimum = Math.min(minimum, nums[left]);
                    left = mid + 1;
                } else {
                    minimum = Math.min(nums[mid], minimum);
                    right = mid - 1;
                }
            
        }

        return minimum;
    }

    /* 
         0 1 2 3 4 5
        [1 2 3 4 5 6] 
    */
}
