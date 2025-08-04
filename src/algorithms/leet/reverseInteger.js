export const REVERSE_INTEGER_ALGORITHM_CODE_JS =`
function reverse(x) {
  if (x % 10 === x) return x;

  let rev = 0;

  const MAX_INT = 2 ** 31 - 1;  // 2147483647
  const MIN_INT = -(2 ** 31);  // -2147483648

  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10); // truncate instead of floor to work with negatives correctly

    // Check for overflow
    if (
      rev > Math.trunc(MAX_INT / 10) ||
      (rev === Math.trunc(MAX_INT / 10) && digit > 7)
    ) {
      return 0;
    }

    // Check for underflow
    if (
      rev < Math.trunc(MIN_INT / 10) ||
      (rev === Math.trunc(MIN_INT / 10) && digit < -8)
    ) {
      return 0;
    }

    rev = rev * 10 + digit;
  }

  return rev;
}
`


export function reverse(x) {
  if (x % 10 === x) return x;

  let rev = 0;

  const MAX_INT = 2 ** 31 - 1;  // 2147483647
  const MIN_INT = -(2 ** 31);  // -2147483648

  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10); // truncate instead of floor to work with negatives correctly

    // Check for overflow
    if (
      rev > Math.trunc(MAX_INT / 10) ||
      (rev === Math.trunc(MAX_INT / 10) && digit > 7)
    ) {
      return 0;
    }

    // Check for underflow
    if (
      rev < Math.trunc(MIN_INT / 10) ||
      (rev === Math.trunc(MIN_INT / 10) && digit < -8)
    ) {
      return 0;
    }

    rev = rev * 10 + digit;
  }

  return rev;
}