class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function findMax(arr){
            let max = 0;
            for(let num of arr){
                if(max<num) max = num;
            }
            return max;
        }

        function calculateHours(eatingRate, piles){
            let total = 0;

            for(let num of piles){
                let hours = Math.ceil(num/eatingRate);
                total += hours;
            }

            return total;
        }

        let start = 1;
        let end = findMax(piles);

        while(start<end){
            let mid = Math.floor((start+end)/2);
            let hours = calculateHours(mid, piles);

            if(hours<=h){
                end = mid;
            }else{
                start = mid+1;
            }

        }

        return end;

    }
}
