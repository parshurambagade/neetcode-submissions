class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = [];

        function isAlphaNumeric(char){
                let a = "a".charCodeAt(0);
                let z = "z".charCodeAt(0);
                let zero = "0".charCodeAt(0);
                let nine = "9".charCodeAt(0);
            let charCode = char.charCodeAt(0);

            if((charCode<=z && charCode>=a) || (charCode>=zero && charCode<=nine)) return true;
            return false;

        }

        for(let char of s){
            if(isAlphaNumeric(char.toLowerCase())){
                arr.push(char.toLowerCase());
            }
        }

        if(arr.length<=1) return true;
        console.log(arr);
        let left = 0;
        let right = arr.length-1;

        while(left<=right){
            if(arr[left]!==arr[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
