import React from 'react';
import './ChessBoard.css';
import Tile from '../tile/Tile';

const horizontalAxis = ["a","b","c","d","e","f","g","h"];
const verticalAxis = ["1","2","3","4","5","6","7","8"];

interface Piece {
  image: string,
  x: number,
  y: number,
}

const pieces: Piece[] = []; 

for (let p = 0; p < 2; p++){
  const type = p === 0 ? "Black" : "White";
  const y = p === 0 ? 7 : 0;

  pieces.push({ image: `./pieces/rook${type}.svg`, x: 0, y});
  pieces.push({ image: `./pieces/rook${type}.svg`, x: 7, y});
  pieces.push({ image: `./pieces/knight${type}.svg`, x: 1, y});
  pieces.push({ image: `./pieces/knight${type}.svg`, x: 6, y});
  pieces.push({ image: `./pieces/bishop${type}.svg`, x: 2, y});
  pieces.push({ image: `./pieces/bishop${type}.svg`, x: 5, y});
  pieces.push({ image: `./pieces/queen${type}.svg`, x: 3, y});
  pieces.push({ image: `./pieces/king${type}.svg`, x: 4, y});
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "./pieces/pawnBlack.svg", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "./pieces/pawnWhite.svg", x: i, y: 1 });
}

// pieces.push({ image: "./pieces/rookBlack.svg", x: 0, y: 7 });
// pieces.push({ image: "./pieces/rookBlack.svg", x: 7, y: 7 });
// pieces.push({ image: "./pieces/knightBlack.svg", x: 1, y: 7 });
// pieces.push({ image: "./pieces/knightBlack.svg", x: 6, y: 7 });
// pieces.push({ image: "./pieces/bishopBlack.svg", x: 2, y: 7 });
// pieces.push({ image: "./pieces/bishopBlack.svg", x: 5, y: 7 });
// pieces.push({ image: "./pieces/queenBlack.svg", x: 3, y: 7 });
// pieces.push({ image: "./pieces/kingBlack.svg", x: 4, y: 7 });

// pieces.push({ image: "./pieces/rookWhite.svg", x: 0, y: 0 });
// pieces.push({ image: "./pieces/rookWhite.svg", x: 7, y: 0 });
// pieces.push({ image: "./pieces/knightWhite.svg", x: 1, y: 0 });
// pieces.push({ image: "./pieces/knightWhite.svg", x: 6, y: 0 });
// pieces.push({ image: "./pieces/bishopWhite.svg", x: 2, y: 0 });
// pieces.push({ image: "./pieces/bishopWhite.svg", x: 5, y: 0 });
// pieces.push({ image: "./pieces/queenWhite.svg", x: 4, y: 0 });
// pieces.push({ image: "./pieces/kingWhite.svg", x: 3, y: 0 });

const ChessBoard = () => {
  let board = [];
  
  for (let j = verticalAxis.length-1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      
      let image = undefined;

      pieces.forEach (p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      })

      board.push(<Tile image={image} number={number}/>)
    }
  }
  return (
    <div id="chessBoard">{board}</div>
  )
}

export default ChessBoard