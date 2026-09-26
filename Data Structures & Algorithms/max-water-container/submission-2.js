class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let start = 0;
        let end = heights.length-1;

        while(start<end){
            let height = Math.min(heights[start], heights[end]);
            let width = end - start;
            let area = height * width;
            
            maxArea = Math.max(area, maxArea);

            if(heights[start]<=heights[end]){
                start++;
            }else{
                end--;
            }
        }

        return maxArea;
    }
}
