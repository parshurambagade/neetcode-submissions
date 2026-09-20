class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freqMap = new Map();
        let a = 'a'.charCodeAt(0)

        for(let str of strs){
            let count = new Array(26).fill(0);
            for(let char of str){
                let index = char.charCodeAt(0) - a;
                count[index]++;
            }
            let key = count.join();
            if(freqMap.has(key)){
                freqMap.get(key).push(str);
            }else{
                freqMap.set(key, [str]);
            }
        }

        return [...freqMap.values()]
    }   
}
