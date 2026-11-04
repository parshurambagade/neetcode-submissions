class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let total = rows * cols;

        let start = 0;
        let end = total-1;

        while(start<=end){
            let mid = start + Math.floor((end-start/2));

            let rowIdx = Math.floor(mid/cols);
            let colIdx = mid%cols;

            if(matrix[rowIdx][colIdx]<target){
                start = mid+1;
            }else if(matrix[rowIdx][colIdx]>target){
                end = mid-1
            }else{
                return true;
            }
        }

        return false;
    }
}
