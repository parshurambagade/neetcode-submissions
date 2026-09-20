class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let freqMap = new Map();

        for(let str of strs){
            let key = str.split("").sort().join();
            if(!freqMap.has(key)){
                freqMap.set(key, [str]);
            }else{
                freqMap.get(key).push(str);
            }
        }

        return [...freqMap.values()];
    }
}
