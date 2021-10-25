import React, { useState } from 'react';
import Block from './Block';

const Board = () => {
  const [ game, setGame ] = useState(new Array(9).fill());
  const [ player, setPlayer ] = useState(1);

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

  return (
    <div className='grid grid-cols-ttt justify-center content-center 
					justify-items-center items-center bg-gray-200'>
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
