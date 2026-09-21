class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let bucket = new Array(nums.length+1).fill(null).map(() => []);

        let freqMap = new Map();

        for(let num of nums){
            freqMap.set(num, (freqMap.get(num) | 0) + 1)
        }

        for(let [num, count] of freqMap){
            bucket[count].push(num);
        }

        let result = new Array();

        for(let i=bucket.length-1; i>=0; i--){
            if(result.length>=k) break;
            result.push(...bucket[i]);
        }

        return result.slice(0, k);

    }
}
