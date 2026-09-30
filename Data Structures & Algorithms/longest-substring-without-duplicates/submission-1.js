class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        let seen = new Set();

        for(let right=0; right<s.length; right++){
            while(seen.has(s[right])){
                seen.delete(s[left]);
                left++;
            }

            maxLength = Math.max(maxLength, right-left+1);
            seen.add(s[right]);
        }

        return maxLength;
    }
}
