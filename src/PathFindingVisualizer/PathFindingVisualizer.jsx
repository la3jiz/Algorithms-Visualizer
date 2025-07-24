import React, { useEffect, useState } from "react";
import Node from "./Node/Node";
import "./PathFindingVisualizer.css";

const PathFindingVisualizer = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const nodes = [];
    for (let row = 0; row < 17; row++) {
      const currentRow = [];
      for (let col = 0; col < 45; col++) {
        const currentNode = {
          row,
          col,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 40,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    setNodes(nodes);
  }, []);
  return (
    <div className="grid">
      {nodes.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((node, colIndex) => {
            const { isStart, isFinish } = node;
            return <Node keyIndex={colIndex} isStart={isStart} isFinish={isFinish}></Node>;
          })}
        </div>
      ))}
    </div>
  );
};

export default PathFindingVisualizer;
