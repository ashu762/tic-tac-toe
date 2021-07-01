import React from "react";
import Square from "./Square";
const Board = ({ sqaures, handleClick }) => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={sqaures[0]} onClick={() => handleClick(0)}></Square>
        <Square value={sqaures[1]} onClick={() => handleClick(1)}></Square>
        <Square value={sqaures[2]} onClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={sqaures[3]} onClick={() => handleClick(3)}></Square>
        <Square value={sqaures[4]} onClick={() => handleClick(4)}></Square>
        <Square value={sqaures[5]} onClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={sqaures[6]} onClick={() => handleClick(6)}></Square>
        <Square value={sqaures[7]} onClick={() => handleClick(7)}></Square>
        <Square value={sqaures[8]} onClick={() => handleClick(8)}></Square>
      </div>
    </div>
  );
};

export default Board;
