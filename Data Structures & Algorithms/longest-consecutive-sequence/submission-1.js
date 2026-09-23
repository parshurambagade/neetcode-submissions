class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxCount = 0;
        let set = new Set(nums);

        for(let num of set){
            if(!set.has(num-1)){
                let next = num;
                let count = 0;

                while(set.has(next)){
                    next++;
                    count++;
                }
            maxCount = Math.max(count, maxCount);
            }

        }
        return maxCount;

    }
}
