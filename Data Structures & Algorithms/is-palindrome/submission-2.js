class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNumeric(char){
                let a = "a".charCodeAt(0);
                let z = "z".charCodeAt(0);
                let zero = "0".charCodeAt(0);
                let nine = "9".charCodeAt(0);
            let charCode = char.charCodeAt(0);

            if((charCode<=z && charCode>=a) || (charCode>=zero && charCode<=nine)) return true;
            
            return false;

        }

        let left = 0;
        let right = s.length-1;
        s = s.toLowerCase();

        while(left<=right){
            while(left<s.length && !isAlphaNumeric(s[left])){
                left++;
            }

            while(right>=0 && !isAlphaNumeric(s[right])){
                right--;
            }

            if(s[left]!==s[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
