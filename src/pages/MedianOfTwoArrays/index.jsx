import React, { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import CodeSnippet from "../../components/codeSnippet";
import MedianItem from "./MedianItem";
import { medianOfTwoArrays } from "../../algorithms/leet/medianOfTwoArrays";

let ALGORITHM_CODE = `const medianOfTwoArrays = (arr1, arr2) => {
  const resArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const len = resArray.length;

  if (len % 2 !== 0) {
    return resArray[Math.floor(len / 2)];
  } else {
    return (resArray[len / 2 - 1] + resArray[len / 2]) / 2;
  }
};`;

const MedianOfTwoArrays = () => {
  const array1 = [2, 4, 1, 8];
  const array2 = [3, 6, 9, 7];
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [mergedArray, setMergedArray] = useState([]);
  const [sortStep, setSortStep] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [median, setMedian] = useState(null);

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
    const merged = [...array1, ...array2];
    setMergedArray(merged);
    setSortStep(-1);
    await new Promise((res) => setTimeout(res, 700));
    await animateSort(merged);
    setMedian(medianOfTwoArrays(array1, array2));
    setIsCodeRunning(false);
  };

  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold  max-w-2xl text-left">
          Median Of Two Sorted Arrays ( Bubble Sort ):
        </p>
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
                {array1.map((item, index) => (
                  <MedianItem key={index} item={item} />
                ))}
              </div>
              <div className="flex ">
                {array2.map((item, index) => (
                  <MedianItem key={index} item={item} />
                ))}
              </div>
            </>
          )}
          {(isCodeRunning || mergedArray.length > 0) && (
            <div className={`flex ${isSorted&& "gap-1"}`}>
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
                  <MedianItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative bottom-36 flex flex-col items-center justify-center w-full">
        {!!median && (
          <p className="text-2xl font-bold ">
            Median: {median}
          </p>
        )}
        </div>
      </div>
      <div className="px-12  relative mb-12">
        <CodeSnippet
          code={ALGORITHM_CODE}
          codingLanguage={"javascript"}
          title={"Median Of Two Sorted Arrays Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default MedianOfTwoArrays;
