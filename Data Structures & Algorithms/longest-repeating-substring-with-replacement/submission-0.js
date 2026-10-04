class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freqMap = new Array(26).fill(0);
        let left = 0;
        let maxFreq = 0;
        let maxWindow = 0;
        let A = 'A'.charCodeAt(0);

        for(let right=0; right<s.length; right++){
            let idx = s[right].charCodeAt(0) - A;
            freqMap[idx]++;
            
            maxFreq = Math.max(maxFreq, freqMap[idx]);

            let windowSize = right-left+1;

            if(windowSize-maxFreq>k){
                freqMap[s[left].charCodeAt(0)-A]--;
                left++;
            }

            windowSize = right-left+1;

            maxWindow = Math.max(maxWindow, windowSize);
        }

        return maxWindow;
    }
}
