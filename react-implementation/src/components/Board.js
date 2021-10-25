import React, { useState } from 'react';
import Block from './Block';

const Board = () => {
  const [ game, setGame ] = useState(new Array(9).fill(0));

  return (
    <div>
      <p className='text-center'>Hello</p>
      {game.map(ele => {
        return <Block checked={ele} key={Math.random()} />;
      })}
    </div>
  );
};

export default Board;
