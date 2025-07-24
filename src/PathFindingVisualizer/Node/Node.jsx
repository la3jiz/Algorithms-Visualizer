import React from "react";
import "./Node.css";

const Node = ({ keyIndex, isStart, isFinish }) => {
  const extraClassName = isFinish ? "node-finish" : isStart ? "node-start" : "";
  return <div className={`node ${extraClassName}`} key={keyIndex}></div>;
};

export default Node;
