import { useState, useEffect } from 'react';
import Block from './Block';
import History from './History';

// All positions to check to see if they are the same value
const configs = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ]
];

const Board = () => {
  const [ game, setGame ] = useState(new Array(9).fill());
  const [ history, setHistory ] = useState([ { player: 1, state: new Array(9).fill() } ]);
  const [ player, setPlayer ] = useState(1);

  useEffect(
    () => {
      setTimeout(() => {
        checkWinner();
      }, 150);
    },
    [ game ]
  );

  const handleClick = idx => {
    let temp;
    const newGame = game.map((ele, i) => {
      if (i === idx && !ele) {
        if (player === 1) {
          setPlayer(2);
          temp = 2;
          return 'X';
        }
        if (player === 2) {
          setPlayer(1);
          temp = 1;
          return 'O';
        }
      }
      return ele;
    });

    setGame(newGame);
    setHistory([ ...history, { player: temp, state: newGame } ]);
  };

  const checkWinner = () => {
    // 0 1 2
    // 3 4 5
    // 6 7 8
    for (let i = 0; i < configs.length; i++) {
      const idx = configs[i];

      if (game[idx[0]] && game[idx[0]] === game[idx[1]] && game[idx[0]] === game[idx[2]]) {
        alert(`player ${player} wins`);
      }
    }
  };

  return (
    <div className='game'>
      <div className='board'>
        {game.map((ele, idx) => {
          return (
            <Block
              checked={ele}
              key={idx}
              onClick={() => {
                handleClick(idx);
              }}
            />
          );
        })}
      </div>
      <History history={history} setHistory={setHistory} setGame={setGame} setPlayer={setPlayer} />
    </div>
  );
};

export default Board;
