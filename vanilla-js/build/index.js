"use strict";
const board = document.querySelector('#board');
const restart = document.querySelector('#restart_button');
const HEIGHT = 3, WIDTH = 3;
// make board
const grid = Array(HEIGHT)
    .fill(0)
    .map(() => Array(WIDTH)
    .fill(0)
    .map(() => ({
    clicked: false,
    player: '',
})));
const tileClick = (e) => {
    // have to type assert bc TS doesn't know the target is an HTML element
    const target = e.target.id;
    const [x, y] = target.split('-');
    console.log(x, y);
};
const initializeBoard = () => {
    for (const [i, row] of grid.entries()) {
        for (const [j, square] of row.entries()) {
            const gridTile = document.createElement('div');
            gridTile.setAttribute('id', `${i}-${j}`);
            gridTile.setAttribute('class', 'tile');
            board === null || board === void 0 ? void 0 : board.appendChild(gridTile);
            gridTile.addEventListener('click', tileClick);
            console.log(i, j);
        }
    }
};
console.log(grid);
initializeBoard();
