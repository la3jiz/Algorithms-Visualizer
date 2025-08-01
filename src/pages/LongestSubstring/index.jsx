import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import {
  LONGEST_SUBSTRING_ALGORITHM_CODE_JS,
  longestSubstring,
} from "../../algorithms/leet/longestSubstring";
import CodeSnippet from "../../components/codeSnippet";
const LongestSubstring = () => {
  const [stringInput, setStringInput] = useState("");
  const [lgStr, setLgStr] = useState("");
  const runCode = () => {
    setLgStr(longestSubstring(stringInput));
  };

  const reset=() => {
    setStringInput("");
    setLgStr("");
  }
  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold ">
          {" "}
          Longest Substring Without Repeating Characters:
        </p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton
            onClick={stringInput.length > 0 ? runCode : () => {}}
            text={"Run Code"}
          />
          <IconButton
            onClick={reset}
            icon={"material-symbols-light:restart-alt"}
          />{" "}
        </div>
        <div className="flex items-center justify-center  w-full h-[50vh]">
          <div className=" flex flex-col items-center justify-center gap-6">
            <input
              value={stringInput}
              onChange={(e) => setStringInput(e.target.value)}
              type="text"
              placeholder="Enter a string"
              className="
    font-medium text-white 
    bg-[#1c1c1e] 
    rounded-[0.4vw] 
    border-none outline-none 
    transition-shadow duration-400 
    p-[0.4vw] w-[500px] 
    shadow-[0_0_0.4vw_rgba(0,0,0,0.5),_0_0_0_0.15vw_transparent] 
    hover:shadow-[0_0_0_0.15vw_rgba(135,207,235,0.186)] 
    focus:shadow-[0_0_0_0.15vw_#1963fd]
  "
            />
            <div>
            {lgStr && (
              <p className="text-2xl font-bold ">Output: {lgStr.length}</p>
            )}
            {lgStr && (
              <p className="text-lg text-gray-500 mt-1 ">
                Explanation: The answer is "{lgStr}", with the length of{" "}
                {lgStr.length}.
              </p>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={LONGEST_SUBSTRING_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"Longest Substring Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default LongestSubstring;
