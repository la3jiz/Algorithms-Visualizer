
export  const ZIGZAG_CONVERSION_ALGORITHM_CODE_JS = `cconst zigzagConversion = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = new Array(numRows).fill("");
  let rowIndex = 0;
  let isGoingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[rowIndex] += s.charAt(i);
    if (rowIndex === 0 || rowIndex === numRows - 1) isGoingDown = !isGoingDown;
    rowIndex += isGoingDown ? 1 : -1;
  }

  return rows.join("");
};
`

export const zigzagConversion = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) return s;

  const rows = new Array(numRows).fill("");
  let rowIndex = 0;
  let isGoingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[rowIndex] += s.charAt(i);
    if (rowIndex === 0 || rowIndex === numRows - 1) isGoingDown = !isGoingDown;
    rowIndex += isGoingDown ? 1 : -1;
  }

  return rows;
};

export function zigzagConversionExplanation(s, numRows) {
  if (numRows === 1 || numRows >= s.length) return s;

  // Create a 2D matrix to represent the zigzag visually
  const matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
  }

  let row = 0;
  let col = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    matrix[row][col] = s[i];

    if (goingDown) {
      if (row === numRows - 1) {
        goingDown = false;
        row--;
        col++;
      } else {
        row++;
      }
    } else {
      if (row === 0) {
        goingDown = true;
        row++;
      } else {
        row--;
        col++;
      }
    }
  }

  // Convert the matrix into a string explanation
  let explanation = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j <= col; j++) {
      explanation += matrix[i][j] ? matrix[i][j] + " " : "  ";
    }
    explanation += "\n";
  }

  return explanation;
}