import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import {
  ZIGZAG_CONVERSION_ALGORITHM_CODE_JS,
  zigzagConversion,
  zigzagConversionExplanation,
} from "../../algorithms/leet/zigzagConversion";
import CodeSnippet from "../../components/codeSnippet";
import Input from "../../components/input";
const ZigzagConversion = () => {
  const [stringInput, setStringInput] = useState("PAYPALISHIRING");
  const [numRows, setNumRows] = useState(3);
  const [str, setStr] = useState("");
  const [explanation, setExplanation] = useState("");
  const runCode = () => {
    setStr(zigzagConversion(stringInput,numRows).join(""));
    setExplanation(zigzagConversionExplanation(stringInput, numRows));
  };

  const reset = () => {
    setStringInput("PAYPALISHIRING");
    setNumRows(3);
    setExplanation("");
    setStr("");
  };
  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <div className="flex flex-col items-start justify-between w-full">
        <p className="text-3xl font-bold "> Zigzag Conversion:</p>
            <p className="text-lg text-gray-500 ">You can use this popular example "PAYPALISHIRING":</p>
            </div>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton
            onClick={stringInput.length > 0 && numRows > 0 ? runCode : () => {}}
            text={"Run Code"}
          />
          <IconButton
            onClick={reset}
            icon={"material-symbols-light:restart-alt"}
          />{" "}
        </div>
        <div className="flex items-center justify-center  w-full h-[50vh]">
          <div className=" flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-6">
            <Input
              value={stringInput}
              onChange={(e) => setStringInput(e.target.value)}
              type="text"
              placeholder="Enter a string"
            />
            <Input
              value={numRows}
              onChange={(e) => setNumRows(Number(e.target.value))} // ✅ Convert to number here
              min={1}
              type="number"
              placeholder="Enter number of rows"
              extraClassName="w-16"
            />
            </div>
            <div className="">
              {str && <p className="text-2xl font-bold ">Output: {str}</p>}
              {str && (
                <div className="flex items-start justify-center gap-0 mt-2">
                    <p className="text-lg text-gray-500 mt-1 w-full ">Explanation:</p>
                <pre className="text-lg text-gray-500 mt-1 w-full ">
                  {explanation} 
                </pre></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={ZIGZAG_CONVERSION_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"Zigzag Conversion Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default ZigzagConversion;
