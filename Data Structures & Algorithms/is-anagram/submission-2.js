class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        let freqMap = new Map();

        for(let char of s){
            freqMap.set(char, (freqMap.get(char) | 0) + 1);
        }

        for(let char of t){
            if(!freqMap.get(char)){
                return false;
            }

            freqMap.set(char, freqMap.get(char)-1);
        }

        return true;
    }
}
