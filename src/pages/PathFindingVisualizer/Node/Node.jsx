import React from 'react';
import './Node.css';

const Node = ({
  col,
  isFinish,
  isStart,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
}) => {
  const extraClassName = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName} relative`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ><span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold'>{isFinish?"B":isStart?"A":isWall?"W":""}</span></div>
  );
};

export default Node;
