class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = {};

        for(let char of t) need[char] = (need[char] | 0) + 1;

        let bestStart = 0, bestLength = Infinity;

        let left = 0, right = 0;

        let missing = t.length;

        while(right<s.length){
            let char = s[right];

            if(need[char]!==undefined){
                if(need[char]>0) missing--;
                need[char]--;
            }

            while(missing===0){
                let windowLength = right-left+1;
                if(windowLength<bestLength){
                    bestLength = windowLength;
                    bestStart = left;
                }

                let char = s[left];

                if(need[char]!==undefined){
                    need[char]++;
                    if(need[char]>0) missing++;
                }
                left++;

            }

            right++;
        }

        return bestLength === Infinity ? "" : s.slice(bestStart, bestStart+bestLength);
    }
}
