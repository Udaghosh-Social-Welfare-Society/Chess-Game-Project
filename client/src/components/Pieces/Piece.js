import React from 'react'

const Piece = ({rank,file,piece}) => {
  
  const onDragStart = (event) => {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      event.target.style.display = "none";
    }, 0);
    
  }
  
  const onDragEnd = (event) => {event.target.style.display = "block";}

  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      onDragEnd={onDragEnd}
      draggable={true}
      onDragStart={onDragStart}
    />
  );
}

export default Piece