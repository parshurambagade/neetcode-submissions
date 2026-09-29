class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let suffix = [];

        suffix[prices.length-1] = prices.at(-1);

        for(let i=prices.length-2; i>=0; i--){
            suffix[i] = Math.max(prices[i], suffix[i+1]);
        }

        let maxProfit = 0;

        for(let i=0; i<prices.length; i++){
            let profit = suffix[i]-prices[i];
            maxProfit = Math.max(profit, maxProfit);
        }

        return maxProfit;
    }
}
