
export const MY_ATOI_ALGORITHM_CODE_JS = `function myAtoi(s) {
  let result = 0;
  let i = 0;
  const n = s.length;

  // 1. Ignore leading whitespace
  while (i < n && s[i] === ' ') {
    i++;
  }

  // 2. Check for sign
  let posOrNeg = 1;
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    posOrNeg = s[i] === '-' ? -1 : 1;
    i++;
  }

  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  // 3. Convert digits to integer until non-digit
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0); // ASCII conversion

    // 4. Check overflow/underflow before multiplying by 10
    if (result > Math.trunc(MAX_INT / 10) || 
       (result === Math.trunc(MAX_INT / 10) && digit > 7)) {
      return posOrNeg === 1 ? MAX_INT : MIN_INT;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * posOrNeg;
}`;


export const MY_ATOI_ALGORITHM_CODE_JAVA = `  public int myAtoi(String s) {
     int result = 0;
    int i = 0;
    int n = s.length();

    // 1. Ignore leading whitespace
    while (i < n && s.charAt(i) == ' ') {
        i++;
    }

    // 2. Check for sign
    int posOrNeg = 1;
    if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
        posOrNeg = s.charAt(i) == '-' ? -1 : 1;
        i++;
    }

    final int MAX_INT = Integer.MAX_VALUE; // 2147483647
    final int MIN_INT = Integer.MIN_VALUE; // -2147483648

    // 3. Convert digits to integer until non-digit
    while (i < n && Character.isDigit(s.charAt(i))) {
        int digit = s.charAt(i) - '0';//ASCII method is faster but work only with digit

        // 4. Check overflow/underflow before multiplying by 10
        if (result > MAX_INT / 10 || (result == MAX_INT / 10 && digit > 7)) {
            return posOrNeg == 1 ? MAX_INT : MIN_INT;
        }
               result=result*10+digit;
        i++;
    }

    return result * posOrNeg;
}`;

export const myAtoi = (s) => {
  let result = 0;
  let i = 0;
  const n = s.length;

  // 1. Ignore leading whitespace
  while (i < n && s[i] === ' ') {
    i++;
  }

  // 2. Check for sign
  let posOrNeg = 1;
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    posOrNeg = s[i] === '-' ? -1 : 1;
    i++;
  }

  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;

  // 3. Convert digits to integer until non-digit
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0); // ASCII conversion

    // 4. Check overflow/underflow before multiplying by 10
    if (result > Math.trunc(MAX_INT / 10) || 
       (result === Math.trunc(MAX_INT / 10) && digit > 7)) {
      return posOrNeg === 1 ? MAX_INT : MIN_INT;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * posOrNeg;
}

