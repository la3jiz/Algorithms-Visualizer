import React, { useState, useEffect } from "react";
import Node from "./Node/Node";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";

import "./PathFindingVisualizer.css";
import PrimaryButton from "../components/buttons/PrimayButton";
import CodeSnippet from "../components/codeSnippet";
import IconButton from "../components/buttons/IconButton";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const AlgoCode = `function dijkstraWeightedGraph(graph, start) {
  const n = graph.length;
  const distances = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  distances[start] = 0;
  for (let i = 0; i < n - 1; i++) {
    let minDistance = Infinity;
    let nodeIndex = -1;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && distances[j] < minDistance) {
        minDistance = distances[j];
        nodeIndex = j;
      }
    }
    if (nodeIndex === -1) break;
    visited[nodeIndex] = true;
    for (let v = 0; v < n; v++) {
      if (graph[nodeIndex][v] !== Infinity && !visited[v]) {
        let newDis = distances[nodeIndex] + graph[nodeIndex][v];
        if (newDis < distances[v]) {
          distances[v] = newDis;
        }
      }
    }
  }
  return distances;
}
`;

const PathFindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  useEffect(() => {
    const initialGrid = getInitialGrid();
    setGrid(initialGrid);
  }, []);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold ">Visualize Dijkstra's Algorithm :</p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton onClick={visualizeDijkstra} text={"Run Code"} />
          <IconButton onClick={()=>{}} icon={"material-symbols-light:restart-alt"} />
        </div>
      </div>
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={() => handleMouseDown(row, col)}
                    onMouseEnter={() => handleMouseEnter(row, col)}
                    onMouseUp={handleMouseUp}
                    row={row}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="px-12  relative bottom-20">
        <CodeSnippet
          code={AlgoCode}
          codingLanguage={"javascript"}
          title={"Dijkstra's Algorithm In JS O(n^2)"}
        />
      </div>
    </>
  );
};

export default PathFindingVisualizer;

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
