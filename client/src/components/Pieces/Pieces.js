import React, { useState, useRef } from 'react'
import './Pieces.css'
import Piece from './Piece'
import { createPosition, copyPosition } from '../../helper'
import { useAppContext } from '../../contexts/Context'
import { makeNewMove } from '../../reducer/actions/move'

const Pieces = () => {

  const ref = useRef()

  const {appState,dispatch} = useAppContext();
  
  const currentPosition = appState.position[appState.position.length - 1];

  const calculateCoords = (event) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((event.clientX - left) / size);
    const x = 7 - Math.floor((event.clientY - top) / size);
    return { x,y};
  }

  const onDrop = (event) => {
    const newPosition = copyPosition (currentPosition)
    const {x,y} = calculateCoords(event);
    
    const [p, rank,file] = event.dataTransfer.getData('text').split(',')
    
    newPosition[rank][file] = ''
    newPosition[x][y] = p;
    
    dispatch(makeNewMove({newPosition}))
  }
  
  const onDragOver = (event) => {event.preventDefault()}

  return (
    <div ref={ref} onDrop={onDrop} onDragOver={onDragOver} className="pieces">
      {currentPosition.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "_" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
}

export default Pieces