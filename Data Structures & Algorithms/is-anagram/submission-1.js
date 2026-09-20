class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        let counts = new Array(26).fill(0);
        let aCharCode = 'a'.charCodeAt(0);

        for(let char of s){
            let charCode = char.charCodeAt(0);
            let index = charCode - aCharCode;
            counts[index]++;
        }

        for(let char of t){
            let charCode = char.charCodeAt(0);
            let index = charCode - aCharCode;
            if(!counts[index]) return false;
            counts[index]--;
        }

        return true;
    }
}
