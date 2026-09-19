class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for(let str of strs){
            result += `${str.length}#${str}`;
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
            let pos = str.indexOf("#", i);
            let length = Number(str.slice(i, pos));
            i = pos+1;
            result.push(str.slice(i, i+length));
            i += length;
        }

        return result;
    }
}
