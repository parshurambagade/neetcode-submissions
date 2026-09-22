class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowMap = new Map();
        let colMap = new Map();
        let boxMap = new Map();

        for(let i=0; i<board.length; i++){
            rowMap.set(i, new Set());
            colMap.set(i, new Set());
            boxMap.set(i, new Set());
        }

        for(let row=0; row<board.length; row++){
            for(let col=0; col<board.length; col++){
                let cell = board[row][col];

                if(cell===".") continue;

                let boxRow = Math.floor(row / 3);
let boxCol = Math.floor(col / 3);
let boxIndex = boxRow * 3 + boxCol;

                if(rowMap.get(row).has(cell)) return false;

                if(colMap.get(col).has(cell)) return false;

                if(boxMap.get(boxIndex).has(cell)) return false;

                rowMap.get(row).add(cell);

                colMap.get(col).add(cell);

                boxMap.get(boxIndex).add(cell);
            }
        }

        return true;
    }
}
