class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [];
        let rightMax = [];

        leftMax[0] = height[0];
        rightMax[height.length-1] = height.at(-1);

        for(let i=1; i<height.length; i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }

        for(let i=height.length-2; i>=0; i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i]);
        }

        let result = 0;

        for(let i=0; i<height.length; i++){
            let ht = Math.min(leftMax[i], rightMax[i]);
            result += ht-height[i];
        }

        return result;
    }
}
