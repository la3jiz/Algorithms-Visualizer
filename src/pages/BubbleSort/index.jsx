import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import CodeSnippet from "../../components/codeSnippet";
import ArrayItem from "./ArrayItem";
import { BUBBLE_SORT_ALGORITHM_CODE } from "../../algorithms/sorts/bubbleSort";


const BubbleSort = () => {
  const bubbleArray = [2, 4, 1, 8, 3, 6, 9, 7];
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [mergedArray, setMergedArray] = useState([]);
  const [sortStep, setSortStep] = useState(0);
  const [isSorted, setIsSorted] = useState(false);

  // Bubble sort animation for visualization
  const animateSort = async (arr) => {
    let array = [...arr];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setSortStep(j);
        await new Promise((res) => setTimeout(res, 400));
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setMergedArray([...array]);
          await new Promise((res) => setTimeout(res, 400));
        }
      }
    }
    setSortStep(-1);
    setMergedArray([...array]);
    setIsSorted(true);
  };

  const runCode = async () => {
    setIsCodeRunning(true);
    setIsSorted(false);
    setMergedArray(bubbleArray);
    setSortStep(-1);
    await new Promise((res) => setTimeout(res, 700));
    await animateSort(bubbleArray);
    setIsCodeRunning(false);
  };

  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold  max-w-2xl text-left">Bubble Sort:</p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton
            onClick={runCode}
            text={isCodeRunning ? "Running..." : "Run Code"}
          />
          <IconButton
            onClick={() => {
              setMergedArray([]);
              setIsCodeRunning(false);
              setSortStep(-1);
              setIsSorted(false);
            }}
            icon={"material-symbols-light:restart-alt"}
          />
        </div>
        <div className="flex items-center justify-around w-full h-[50vh] ">
          {!isCodeRunning && mergedArray.length === 0 && (
            <>
              <div className="flex ">
                {bubbleArray.map((item, index) => (
                  <ArrayItem key={index} item={item} />
                ))}
              </div>
            </>
          )}
          {(isCodeRunning || mergedArray.length > 0) && (
            <div className={`flex ${isSorted && "gap-1"}`}>
              {mergedArray.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    sortStep === idx
                      ? "ring-4 ring-[#1963fd]  transition-all duration-300"
                      : isSorted
                      ? "ring-2 ring-green-300 transition-all duration-300"
                      : ""
                  }
                >
                  <ArrayItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
    
      </div>
      <div className="px-12  relative mb-12">
        <CodeSnippet
          code={BUBBLE_SORT_ALGORITHM_CODE}
          codingLanguage={"javascript"}
          title={"Median Of Two Sorted Arrays Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default BubbleSort;
