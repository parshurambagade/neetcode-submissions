class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let smallest = Infinity;

        for(let i=0; i<prices.length; i++){
            let profit = prices[i] - smallest;
            maxProfit = Math.max(profit, maxProfit);
            if(smallest>prices[i]) smallest = prices[i];
        }

        return maxProfit;
    }
}
