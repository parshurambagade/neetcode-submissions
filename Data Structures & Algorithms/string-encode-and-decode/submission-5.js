class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let str of strs){
            encoded += `${str.length}#${str}`
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        let i=0;

        while(i<str.length){
            let pos = str.indexOf('#', i);
            let length = Number(str.slice(i, pos));
            i = pos + 1;
            decoded.push(str.slice(i, i+length));
            i = i+length;
        }

        return decoded;
    }
}
