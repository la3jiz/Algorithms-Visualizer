import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";

import CodeSnippet from "../../components/codeSnippet";
import Input from "../../components/input";
import { reverse, REVERSE_INTEGER_ALGORITHM_CODE_JS } from "../../algorithms/leet/reverseInteger";
import { i } from "motion/react-client";

const ReverseInteger = () => {
  const [reversed, setReversed] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const runCode = () => {
    setIsCodeRunning(true);
    setReversed(reverse(inputValue));
  };

  const reset=() => {
    setReversed(0);
    setIsCodeRunning(false);
    setInputValue(0);
  }
  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold ">
          {" "}
          Reverse Integer with Overflow Check:
        </p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton
            onClick={runCode}
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
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value))}
              type="number"
              placeholder="Enter a number"

            />
            <div>
            {isCodeRunning && (
              <p className="text-2xl font-bold ">Output: {reversed}</p>
            )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={REVERSE_INTEGER_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"Reverse Integer Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default ReverseInteger;
