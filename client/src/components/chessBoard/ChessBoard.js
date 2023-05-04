import React from 'react';
import './ChessBoard.css';

const horizontalAxis = ["a","b","c","d","e","f","g","h"];
const verticalAxis = ["1","2","3","4","5","6","7","8"];

function ChessBoard() {
  let board = [];
  
  for (let j = verticalAxis.length-1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      if (number % 2 === 0) {
          board.push(
            <div className='tile blackTile'>
              {/* [{horizontalAxis[i]}
              {verticalAxis[j]}] */}
            </div>
          );
      }else {
          board.push(
            <div className="tile whiteTile">
              {/* [{horizontalAxis[i]}
              {verticalAxis[j]}] */}
            </div>
          );
      }
    }
  }
  return (
    <div id="chessBoard">{board}</div>
  )
}

export default ChessBoard