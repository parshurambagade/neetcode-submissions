class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function binarySearch(arr, target) {
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

        for (let i = 0; i < matrix.length; i++) {
            if (binarySearch(matrix[i], target)) return true;
        }

        return false;
    }
}
