class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let start = 0, end = height.length-1;
        let leftMax = 0, rightMax = 0;
        let result = 0;

        while(start<end){
            
            leftMax = Math.max(height[start], leftMax);
            rightMax = Math.max(height[end], rightMax);

            if(leftMax<rightMax){
                result += leftMax-height[start];
                start++;
            }else{
                result += rightMax-height[end];
                end--;
            }
        }

        return result;
    }
}
