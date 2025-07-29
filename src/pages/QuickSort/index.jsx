import React, { useState } from "react";
import ArrayItem from "./ArrayItem";
import PrimaryButton from "../../components/buttons/PrimayButton";
import CodeSnippet from "../../components/codeSnippet";
import { quickSortVisual } from "../../algorithms/sorts/quickSort";
import IconButton from "../../components/buttons/IconButton";

let ALGORITHM_CODE = `function quickSort(array, low, high) {
  if (low < high) {
    let index_pivot = partition(array, low, high);
    quickSort(array, low, index_pivot - 1);
    quickSort(array, index_pivot + 1, high);
  }
}

function partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
  let temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
  return i + 1;
}
`;

const QuickSort = () => {
  const [array, setArray] = useState(
    [2, 4, 1, 8, 3, 6, 9, 7].map((value, index) => ({
      value,
      isPivot: false,
      isPivotDone: false,
    }))
  );
    const [isCodeRunning, setIsCodeRunning] = useState(false);


  const resetArray = () => {
    setArray(
      [2, 4, 1, 8, 3, 6, 9, 7].map((value, index) => ({
        value,
        isPivot: false,
        isPivotDone: false,
      }))
    );
  };

  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold ">Quick Sort Algorithm :</p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton
            onClick={async () => {
              setIsCodeRunning(true);
              const newArr = [...array];
              await quickSortVisual(newArr, 0, newArr.length - 1, setArray);
              setIsCodeRunning(false);
            }}
            text={isCodeRunning ? "Running..." : "Run Code"}
          />
          <IconButton
            onClick={resetArray}
            icon={"material-symbols-light:restart-alt"}
          />{" "}
        </div>
        <div className="flex items-center justify-center  w-full h-[50vh]">
          <div className="flex ">
            {array.map((item, index) => (
              <ArrayItem item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-12  relative mb-12">
        <CodeSnippet
          code={ALGORITHM_CODE}
          codingLanguage={"javascript"}
          title={"Quick Sort Algorithm In JS"}
        />
      </div>
    </div>
  );
};

export default QuickSort;
