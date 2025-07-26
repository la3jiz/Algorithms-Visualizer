import React from "react";

const SecondaryButton = ({ onClick, variant, customStyles, text, ...props }) => {
  return (
    <div>
      <button className={`border rounded-md px-2 py-1 text-sm ${customStyles}`} onClick={onClick} variant={variant} props>
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
