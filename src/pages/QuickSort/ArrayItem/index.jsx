import React from "react";
import "./styles.css";
import { Icon } from "@iconify/react";

const ArrayItem = ({ item }) => {
  return (
    <>
      <div className="relative">
        {item.isPivot && <p className="w-4"></p>}
        {
          item.isPivot &&<div className="absolute -top-16 left-11">
            <div className="flex flex-col items-center justify-center">
              <p className={`text-xl text-[#1963fd] ${item.isPivotDone &&"text-gray-500"}`}>Pivot {item.pivotIndex}</p>
               <Icon icon={"material-symbols-light:arrow-cool-down"} className={`text-3xl text-[#1963fd] ${item.isPivotDone &&"text-gray-500"}`}/>
            </div>
          </div>
        }
      </div>
      <div className="arrayItem">{item.value}</div>
    </>
  );
};

export default ArrayItem;
