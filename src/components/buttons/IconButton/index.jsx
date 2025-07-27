import React from "react";
import { Icon } from "@iconify/react";
const IconButton = ({ icon, onClick=()=>{},className="p-1 border rounded-lg cursor-pointer text-4xl hover:scale-105 duration-100 ease-in-out" }) => {
  return (
    <Icon
      onClick={onClick}
      icon={icon}
      className={className}
    />
  );
};

export default IconButton;
