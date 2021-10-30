import React from 'react';

const History = ({ history, setHistory, setGame, setPlayer }) => {
  const handleClick = ({ state, player }, idx) => {
    setGame(state);
    setHistory(history.slice(0, idx + 1));
    setPlayer(player);
  };

  return (
    <div className='history'>
      <table>
        <thead>
          <tr>
            <th>Move</th>
            <th>Goto</th>
          </tr>
        </thead>
        <tbody>
          {history &&
            history.slice(0, -1).map((hist, idx) => {
              const player = hist.player === 1 ? 'X' : 'O';

              return (
                <tr>
                  <td>{`move ${idx} (${player})`}</td>
                  <td>
                    <button onClick={() => handleClick(hist, idx)}>Go</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
