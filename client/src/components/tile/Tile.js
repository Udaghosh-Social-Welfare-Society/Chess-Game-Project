import React from 'react';
import "./Tile.css";

interface Props {
    image?: string;
    number: number
}

const Tile = ({number, image}: Props) => {
    if (number % 2 === 0) {
        return (
          <div className="tile blackTile">
            <img src={image}/>
          </div>
        ); 
    }else {
        return (
          <div className="tile whiteTile">
            <img src={image} />
          </div>
        );
    }

}

export default Tile