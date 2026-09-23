class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let a = "a".charCodeAt(0);
        let z = "z".charCodeAt(0);
        let zero = "0".charCodeAt(0);
        let nine = "9".charCodeAt(0);

        function isAlphaNumeric(char) {
            let charCode = char.charCodeAt(0);

            return (charCode <= z && charCode >= a) || (charCode >= zero && charCode <= nine);
        }

        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
            let leftStr = s[left].toLowerCase();
            let rightStr = s[right].toLowerCase();

            while (left < s.length && !isAlphaNumeric(leftStr)) {
                left++;
                leftStr =  s[left]?.toLowerCase();
            }

            while (right >= 0 && !isAlphaNumeric(rightStr)) {
                right--;
                rightStr = s[right]?.toLowerCase();
            }

            if (leftStr !== rightStr) return false;
            left++;
            right--;
        }

        return true;
    }
}
