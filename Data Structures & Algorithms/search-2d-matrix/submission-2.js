class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        function binarySearch(arr, target){
            let start = 0;
            let end = arr.length - 1;

            while (start <= end) {
                let mid = Math.floor((start + end) / 2);

                if (arr[mid] < target) {
                    start = mid + 1;
                } else if (arr[mid] > target) {
                    end = mid - 1;
                } else {
                    return true;
                }
            }

            return false;
        }

        let start = 0;
        let end = matrix.length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            let midArr = matrix[mid]
            if (midArr[0] <= target && midArr.at(-1)>=target) {
                return binarySearch(midArr, target);
            } else if (midArr[0]<= target && midArr.at(-1)<=target) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }

        return false;
    }
}
