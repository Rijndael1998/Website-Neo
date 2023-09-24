// Lukasz Baldyga 2020

//this looks for possible values for a row in a grid
//by eliminating the possibilities one by one by linear searching a row and removing items
function findPossibleRow(row: Array<number>) { 
    const currentPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let item = row.length - 1; item >= 0; item--) {
        let elem = row[item];
        if(elem == 0) continue; //ignores 0 as it is an empty space

        let index = currentPossible.indexOf(elem);
        if(index != -1) currentPossible.splice(index,1);
        else return [];    //two of the same kind of element in a row
    }
    return currentPossible; //returns the an array of possibilities that have not been eliminated
}
//this looks for possible values for a column in a grid. it
//flips a column on its side, and then uses findPossibleRow function to locate
//the possibilities. Uses its output. have a look at the return of findPossibleRow
function findPossibleCol(grid: Array<Array<number>>, col: number) {    
    let rows = [];                        
    for (let row = grid.length - 1; row >= 0; row--) rows.push(grid[row][col]); //as it is literally that.
    return findPossibleRow(rows); //returns the an array of possibilities that have not been eliminated
}

//this looks for possible values in a 3x3 quadrant in a grid.
//the 9x9 grid is split into 3x3 even quadrants. use row and col to select them respectively. 
function findPossibleQua(grid: Array<Array<number>>, row: number, col: number) {
    const elem = [];
    for (let x = row * 3; x < row * 3 + 3; x++) {
        for (let y = col * 3; y < col * 3 + 3; y++) {
            elem.push(grid[x][y]);    //it collects the items from the 3x3 quadrant and adds them to the list
        }
    }
    return findPossibleRow(elem); //returns the an array of possibilities that have not been eliminated
}

//combines the possible numbers to get the possible numbers
//from the row, column, and quadrant.
export function findPossibleSummary(grid: Array<Array<number>>, row: number, col: number) {    
    let rowVals = findPossibleRow(grid[row]);    
    let colVals = findPossibleCol(grid, col);    
    let quaVals = findPossibleQua(grid, Math.floor(row / 3), Math.floor(col / 3));
    let currentPossible = [];

    //if a number is in all of the list, it's added to the possible list for the specific square
    for (let i = 1; i < 10; i++) 
        if(rowVals.includes(i) && colVals.includes(i) && quaVals.includes(i)) 
            currentPossible.push(i); 

    return currentPossible; //returns a possible number for a specific square
}

//returns a 3d array (n x 9 x 9) that contains the possible numbers for that
//specific square in respect to the grid array.
//it's called local because it does not interfere with the global `possible` array.
function findAllPossibleLocal(grid: Array<Array<number>>) {   
    const possibleLocal: Array<Array<Array<number>>> = [];

    for (let i = 0; i < 9; i++) {
        possibleLocal.push([]); //populate arrays
        for(let ii = 0; ii < 9; ii++) {
            possibleLocal[i].push([]);
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] != 0) possibleLocal[row][col] = findPossibleSummary(grid, row, col); //only check 0s
            else possibleLocal[row][col] = [];
        }
    }
    return possibleLocal;
}

//checks if a grid is solved
function checkSolved(grid: Array<Array<number>>) { 
    for (let row = grid.length - 1; row >= 0; row--) {
        for (let col = grid[row].length - 1; col >= 0; col--) {
            if(grid[row][col] == 0)
                return false;

            //temporarily sets the grid value to 0
            const tmp = grid[row][col];
            grid[row][col] = 0;

            // calculate the possibility of another result
            const tmpResults = findPossibleSummary(grid, row, col);

            //returns the grid value to the original value
            grid[row][col] = tmp;     

            //checks if there is no other result possible (or no result).
            //This works because if there is 1 result, it must be the tmp value, thus correct.
            //if you do this for every value, and all of them are correct, then the whole grid
            //is correct. 
            if(tmpResults.length != 1) 
                return false;                                        
        }
    }
    
    return true;
}

//by using the backtracking algorithm recursively, the grid slowly is filled up with more items.
//it starts at [0][0] on the grid, then increases in the column, then the row, until the grid is solved.
export function backtracking(grid: Array<Array<number>>, iteration: number): false | Array<Array<number>> {                   
    let row = Math.floor(iteration/9);
    let col = iteration % 9;
    
    //checks if the grid is solved.
    if(checkSolved(grid)) 
        return grid; 

    //the algo should only check contents with 0. This skips that.
    if(grid[row][col] != 0) 
        return backtracking(grid, iteration+1); 

    //finds the possible numbers for this specific grid element. 
    //This is done again because the grid was changed over time.
    let possibleLocal = findPossibleSummary(grid, row, col);
                                                            
    //Sets a temporary letiable that stores the value
    //This is because arrays are pass by reference. If, for example, this function advanced 3 iterations
    //and found that there are no possible values, it would not return the 0 back to where it was.
    //have a look at this:
    //```js
    //let a = ["cat", "dog", "hog"];
    //let b = a;
    //a[0] = "bog";
    //console.log(b); //["bog", "dog", "hog"]
    //```
    //This kind of js behavior is what I'm trying to not have here as grid would get changed and not changed back
    //It was one of the bugs with the program.
    const tmp = grid[row][col];

    for (let i = 0; i < possibleLocal.length; i++) {
        grid[row][col] = possibleLocal[i];
        if(checkSolved(grid)) return grid;     //if the backtracking algo solves the grid, it will return the result.

        let result = backtracking(grid, iteration+1);
        if(result !== false) return result; //If the backtracking algo succeeds, it will return the result.
    }

    grid[row][col] = tmp; //returns temp back to what it was

    return false; //failed to solve or out of options
}

//quickly tries solving the grid by reduction.
//reduction is where an element in the grid has only got one possible number.
//the function loops until the grid is solved or when it can no longer find single possible number elements.
//it is good to do this at the start as it is cheap, it could solve the grid and if not, it could possibly
//reduce the guesses that the backtracking algorithm has to solve. 
function reduce(grid: Array<Array<number>>) { 
    let possible = findAllPossibleLocal(grid);
    let changed = false;

    do {
        changed = false;
        for (let row = 0; row < possible.length; row++) {
            for (let col = 0; col < possible[row].length; col++) {
                if(grid[row][col] == 0 && possible[row][col].length == 1) {
                    grid[row][col] = possible[row][col][0];
                    changed = true;
                }
            }
        }

        possible = findAllPossibleLocal(grid);
    } while (changed);

    return grid;
}

//returns false if there are duplicate items, if not returns true
function containsDuplicates(row: Array<number>) { 
    let current: Array<number> = [];
    for (let item = row.length - 1; item >= 0; item--) {
        if(row[item] == 0) 
            continue; //skip 0s

        if(current.includes(row[item])) 
            return true;

        current.push(row[item]);
    }

    return false;
}

function checkDuplicateCol(grid: Array<Array<number>>, col: number) {    
    let rows = [];
    for (let row = grid.length - 1; row >= 0; row--) 
        rows.push(grid[row][col]); 

    return containsDuplicates(rows); 
}

function checkDuplicateQua(grid: Array<Array<number>>, row: number, col: number) {
    let elem = [];
    for (let x = row * 3; x < row * 3 + 3; x++) {
        for (let y = col * 3; y < col * 3 + 3; y++) {
            elem.push(grid[x][y]);    
        }
    }
    return containsDuplicates(elem); 
}

//this function checks for duplicate values in the grid
function checkPossible(grid: Array<Array<number>>) { 
    for (let row = grid.length - 1; row >= 0; row--) {
        if(containsDuplicates(grid[row])) return false;
        if(checkDuplicateCol(grid, row)) return false;
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if(checkDuplicateQua(grid, row, col)) return false;
        }
    }

    return true;
}