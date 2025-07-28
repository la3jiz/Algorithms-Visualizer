//pure algorithm O(n log n) note not allways in some cases n^2 or log n
function quickSort(array, low, high) {
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

//visual algo
export const quickSortVisual = async (arr, low, high, updateArray) => {
  if (low < high) {
    let pivotIndex = await partitionVisual(arr, low, high, updateArray);
    await quickSortVisual(arr, low, pivotIndex - 1, updateArray);
    await quickSortVisual(arr, pivotIndex + 1, high, updateArray);
  }
};

const partitionVisual = async (arr, low, high, updateArray) => {
  let pivot = arr[high].value;
  arr[high].isPivot = true;
  updateArray([...arr]);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j].value < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      updateArray([...arr]);
      await delay(1000);
    }
  }
  arr[high].isPivotDone = true;

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  updateArray([...arr]);
  await delay(1000);
  return i + 1;
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
