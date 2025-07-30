import PrimaryButton from "../../components/buttons/PrimayButton";
import IconButton from "../../components/buttons/IconButton";
import NodeBox from "./NodeBox";
import CodeSnippet from "../../components/codeSnippet";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { ADD_TWO_NUMBERS_ALGORITHM_CODE_JAVA, ADD_TWO_NUMBERS_ALGORITHM_CODE_JS, addTwoNumbers } from "../../algorithms/leet/addTwoNumbers";



const AddTwoNumbers = () => {
  const initial1 = [2, 4, 3];
  const initial2 = [5, 6, 4];
  const [carry, setCarry] = useState(0);
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [step, setStep] = useState(-1); // current digit index
  const [result, setResult] = useState([]);
  const [arr1, setArr1] = useState(initial1);
  const [arr2, setArr2] = useState(initial2);


  const reset = () => {
    setArr1(initial1);
    setArr2(initial2);
    setCarry(0);
    setResult([]);
    setStep(-1);
    setIsCodeRunning(false);
  };

  return (
    <div>
      <div className=" flex flex-col items-start justify-end relative top-20 px-10 mt-4">
        <p className="text-3xl font-bold  max-w-2xl text-left">
          Add Two Numbers:
        </p>
        <div className="mt-2 pl-4 flex items-end justify-between w-full">
          <PrimaryButton onClick={() => addTwoNumbers(setIsCodeRunning, setResult, setCarry, setStep, arr1, arr2)} text={isCodeRunning ? "Running..." : "Run Code"} />
          <IconButton
            onClick={reset}
            icon={"material-symbols-light:restart-alt"}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-12 w-full h-[50vh] ">
    
          <div className="flex ">
            {arr1.map((item, index) => (
              
              <div className={`flex items-center justify-center transition-all duration-300 ${step === index ? 'ring-4 ring-[#1963fd] rounded-lg scale-110' : ''}`}
                key={index}
              >
                <NodeBox item={item} />
                {index < arr1.length - 1 && (
                  <Icon
                    className="mx-6 text-4xl"
                    icon={"material-symbols:arrow-right-alt"}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex ">
            {arr2.map((item, index) => (
              <div className={`flex items-center justify-center transition-all duration-300 ${step === index ? 'ring-4 ring-[#1963fd] rounded-lg scale-110' : ''}`}
                key={index}
              >
                <NodeBox item={item} />
                {index < arr2.length - 1 && (
                  <Icon
                    className="mx-6 text-4xl"
                    icon={"material-symbols:arrow-right-alt"}
                  />
                )}
              </div>
            ))}
          </div>
          {result.length > 0 && (
            <div className="flex items-center justify-center ">
              {result.map((item, index) => (
                <div className={`flex items-center justify-center transition-all duration-300 ${step === index ? 'ring-4 ring-green-400 rounded-full scale-110' : ''}`}
                  key={index}
                >
                  <NodeBox item={item} />
                  {index < result.length - 1 && (
                    <Icon
                      className="mx-6 text-4xl"
                      icon={"material-symbols:arrow-right-alt"}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="px-12 relative mb-12 top-12">
        <CodeSnippet
          code={ADD_TWO_NUMBERS_ALGORITHM_CODE_JS}
          codingLanguage={"javascript"}
          title={"Add Two Numbers Algorithm In JS"}
        />
        <CodeSnippet
          code={ADD_TWO_NUMBERS_ALGORITHM_CODE_JAVA}
          codingLanguage={"java"}
          title={"Add Two Numbers Algorithm In JAVA"}
        />
      </div>
    </div>
  );
};

export default AddTwoNumbers;
