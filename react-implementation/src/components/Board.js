import { useState, useEffect } from 'react';
import Block from './Block';

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
  const [ player, setPlayer ] = useState(1);

  useEffect(
    () => {
      checkWinner();
    },
    [ game ]
  );

  const handleClick = idx => {
    setGame(
      game.map((ele, i) => {
        if (i === idx && !ele) {
          if (player === 1) {
            setPlayer(2);
            return 'X';
          }
          if (player === 2) {
            setPlayer(1);
            return 'O';
          }
        }
        return ele;
      })
    );
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
  );
};

export default Board;
