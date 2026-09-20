class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freqMap = new Map();
        let a = 'a'.charCodeAt(0)

        for(let str of strs){
            let key = new Array(26).fill(0);
            for(let char of str){
                let index = char.charCodeAt(0) - a;
                key[index]++;
            }

            if(freqMap.has(key.join(","))){
                freqMap.get(key.join(",")).push(str);
            }else{
                freqMap.set(key.join(","), [str]);
            }
        }

        return [...freqMap.values()]
    }   
}
