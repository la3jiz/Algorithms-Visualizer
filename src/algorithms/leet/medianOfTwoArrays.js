
export const MEDIAN_OF_TWO_ARRAYS_ALGORITHM_CODE = `const medianOfTwoArrays = (arr1, arr2) => {
  const resArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const len = resArray.length;

  if (len % 2 !== 0) {
    return resArray[Math.floor(len / 2)];
  } else {
    return (resArray[len / 2 - 1] + resArray[len / 2]) / 2;
  }
};`;


export const medianOfTwoArrays = (arr1, arr2) => {
  const resArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const len = resArray.length;

  if (len % 2 !== 0) {
    return resArray[Math.floor(len / 2)];
  } else {
    return (resArray[len / 2 - 1] + resArray[len / 2]) / 2;
  }
};


