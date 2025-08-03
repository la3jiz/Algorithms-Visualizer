
export const LONGEST_PALINDROME_ALGORITHM_CODE_JS=`
//my version of longest palindrome algorithm
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    if (s.length === 1) return s;

    const n = s.length;
    let lgStr = "";
    let i = 0;
    const center = Math.floor(n / 2);

    lgStr = expandAroundCenter(s, center, center);

    while (i <= Math.floor(n / 2)) {
        const isOdd = s.length % 2 !== 0;

        const newLgStrR = (center + i < s.length)
            ? expandAroundCenter(s, center + i, isOdd ? center + i : center + i + 1)
            : "";

        const newLgStrL = (center - i >= 0)
            ? expandAroundCenter(s, isOdd ? center - i : center - i - 1, center - i)
            : "";

        if (newLgStrR.length > lgStr.length) {
            lgStr = newLgStrR;
        }
        if (newLgStrL.length > lgStr.length) {
            lgStr = newLgStrL;
        }

        i++;
    }

    return lgStr;
}
//better version of longest palindrome algorithm
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        const odd = expandAroundCenter(s, i, i);
        if (odd.length > longest.length) {
            longest = odd;
        }

        // Even-length palindrome
        const even = expandAroundCenter(s, i, i + 1);
        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}`;
export function longestPalindromeMyVersion(s) {
    if (!s || s.length < 1) return "";
    if (s.length === 1) return s;

    const n = s.length;
    let lgStr = "";
    let i = 0;
    const center = Math.floor(n / 2);

    lgStr = expandAroundCenter(s, center, center);

    while (i <= Math.floor(n / 2)) {
        const isOdd = s.length % 2 !== 0;

        const newLgStrR = (center + i < s.length)
            ? expandAroundCenter(s, center + i, isOdd ? center + i : center + i + 1)
            : "";

        const newLgStrL = (center - i >= 0)
            ? expandAroundCenter(s, isOdd ? center - i : center - i - 1, center - i)
            : "";

        if (newLgStrR.length > lgStr.length) {
            lgStr = newLgStrR;
        }
        if (newLgStrL.length > lgStr.length) {
            lgStr = newLgStrL;
        }

        i++;
    }

    return lgStr;
}
export function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        const odd = expandAroundCenter(s, i, i);
        if (odd.length > longest.length) {
            longest = odd;
        }

        // Even-length palindrome
        const even = expandAroundCenter(s, i, i + 1);
        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}