class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let str of strs){
            let length = str.length;
            result += `${length}#${str}`
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while(i<str.length){
            let hashIndex = str.indexOf("#", i);
            let length = Number(str.slice(i, hashIndex));
            i = hashIndex+1;

            result.push(str.slice(i, i+length));

            i += length;
        }

        return result;
    }
}
