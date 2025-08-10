import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import {
  MY_ATOI_ALGORITHM_CODE_JS,
  MY_ATOI_ALGORITHM_CODE_JAVA,
  myAtoi
} from "../../algorithms/leet/myAtoi";
import CodeSnippet from "../../components/codeSnippet";
import Input from "../../components/input";
const MyAtoi = () => {
  const [stringInput, setStringInput] = useState("1337c0d3");
  const [myAtoiNbr, setMyAtoiNbr] = useState(0);
  const runCode = () => {
    setMyAtoiNbr(myAtoi(stringInput));
  };

  const reset = () => {
    setStringInput("1337c0d3");
    setMyAtoiNbr(0);
  };
  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold "> String to Integer (Atoi):</p>
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
              {!!myAtoiNbr && <p className="text-2xl font-bold ">Output: {myAtoiNbr}</p>}
       
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={MY_ATOI_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"String to Integer (Atoi) Algorithm In JS"}
        />
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={MY_ATOI_ALGORITHM_CODE_JAVA}
          codingLanguage={"java"}
          title={"String to Integer (Atoi) Algorithm In Java"}
        />
      </div>
    </div>
  );
};

export default MyAtoi;
