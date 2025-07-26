import React from "react";
import { Icon } from "@iconify/react";
const IconButton = ({ icon, onClick }) => {
  return (
    <Icon
      onClick={onClick}
      icon={icon}
      className="p-1 border rounded-lg cursor-pointer text-4xl"
    />
  );
};

export default IconButton;
