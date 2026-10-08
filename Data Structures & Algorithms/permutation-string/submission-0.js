class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        function isFreqSame(arr1, arr2){
            console.log(arr1, arr2)
            for(let i=0; i<arr1.length; i++){
                if(arr1[i]!==arr2[i]) return false;
            }

            return true;
        }

        let freqArr = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);

        for(let char of s1){
            let idx = char.charCodeAt(0) - a;
            freqArr[idx]++;
        }

        let windowSize = s1.length;

        for(let i=0; i<=s2.length-windowSize; i++){
            let tempFreq = new Array(26).fill(0);

            for(let j=i; j<i+windowSize; j++){
                let idx = s2[j]?.charCodeAt(0) - a;
                tempFreq[idx]++;
            }

            if(isFreqSame(freqArr, tempFreq)) return true;
        }

        return false;
    }
}
