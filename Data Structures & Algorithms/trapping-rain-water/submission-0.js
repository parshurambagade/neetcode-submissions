class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        
        let leftMax = [];
        let rightMax = [];

        leftMax[0] = height[0];
        rightMax[height.length-1] = height[height.length-1];

        for(let i=1; i<height.length; i++){
            leftMax[i] = Math.max(height[i], leftMax[i-1]);
        }

        for(let i=height.length-2; i>=0; i--){
            rightMax[i] = Math.max(height[i], rightMax[i+1])
        }

        let result = 0;

        for(let i=0; i<height.length; i++){
            result += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return result;
    }   
}
