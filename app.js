console.log('Hello, World');

grid = [ [ null, null, null ], [ null, null, null ], [ null, null, null ] ];

/**
 * checks if the grid if filled
 */
isFull = () => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const space = grid[i][j];
			if (space) continue;
			else return false;
		}
	}
	return true;
};

/**
 * prompts the user a coord in [x,y] format
 */
function move() {
	step = window.prompt('your move?').split(',').map(Number);
	grid[step[0]][step[1]] = 'x';
	for (let i = 0; i < grid.length; i++) {
		console.log(grid[i]);
	}
}

/**
 * quickly fills out the board with '#' for testing purposes
 */
function quickFill() {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (!grid[i][j]) grid[i][j] = '#';
		}
	}
}


