class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let str of strs){
            let len = str.length;
            encoded+=`${len}#${str}`
        }
        console.log({encoded})
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];

        let i=0;

        while(i<str.length){
            let posi = str.indexOf("#", i);
            let length = Number(str.slice(i,posi));
            i=posi+1;
            let string = str.slice(i, i+length);
            decoded.push(string);
            i = i+length;
        }


        return decoded;
    }
}
