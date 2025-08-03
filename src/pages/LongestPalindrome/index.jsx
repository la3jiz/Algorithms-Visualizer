import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import {
  LONGEST_PALINDROME_ALGORITHM_CODE_JS,
  longestPalindrome,
  longestPalindromeMyVersion,
} from "../../algorithms/leet/longestPalindrome";
import CodeSnippet from "../../components/codeSnippet";
import Input from "../../components/input";
const LongestPalindrome = () => {
  const [stringInput, setStringInput] = useState("");
  const [lgStr, setLgStr] = useState("");
  const runCode = () => {
    setLgStr(longestPalindrome(stringInput));
  };

  const reset = () => {
    setStringInput("");
    setLgStr("");
  };
  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold "> Longest Palindrome Substring:</p>
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
            <Input
              value={stringInput}
              onChange={(e) => setStringInput(e.target.value)}
              type="text"
              placeholder="Enter a string"
            />
            <div>
              {lgStr && <p className="text-2xl font-bold ">Output: {lgStr}</p>}
              {lgStr && (
                <p className="text-lg text-gray-500 mt-1 ">
                  Explanation: "{longestPalindromeMyVersion(stringInput)}" is also a valid answer.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={LONGEST_PALINDROME_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"Longest Palindrome Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default LongestPalindrome;
