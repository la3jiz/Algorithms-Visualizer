import React from "react";
import "./styles.css";
const PrimaryButton = ({ onClick, text }) => {
  return (
<button className="btn" onClick={onClick}> {text}
</button>
  );
};

export default PrimaryButton;
