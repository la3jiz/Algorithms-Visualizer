export const LONGEST_SUBSTRING_ALGORITHM_CODE_JS = `
function longestSubstring(str) {
    let lgStr = "";

    while (str.length > lgStr.length) {
        let i = 0;
        let tempStr = "";
        let isBreak = false;

        while (i < str.length && !isBreak) {
            const currentChar = str.charAt(i);

            if (!isExist(tempStr, currentChar)) {
                tempStr += currentChar;
                i++;
            } else {
                isBreak = true;
            }
        }

        if (tempStr.length > lgStr.length) {
            lgStr = tempStr;
        }

        // Remove the first character from str and continue
        str = str.substring(1);
    }

    return lgStr;
}

function isExist(str, ch) {
    let i = 0;
    let exist = false;
    while (!exist && i < str.length) {
        exist = str.charAt(i) === ch;
        i++;
    }
    return exist;
}

`;
export function longestSubstring(str) {
    let lgStr = "";

    while (str.length > lgStr.length) {
        let i = 0;
        let tempStr = "";
        let isBreak = false;

        while (i < str.length && !isBreak) {
            const currentChar = str.charAt(i);

            if (!isExist(tempStr, currentChar)) {
                tempStr += currentChar;
                i++;
            } else {
                isBreak = true;
            }
        }

        if (tempStr.length > lgStr.length) {
            lgStr = tempStr;
        }

        // Remove the first character from str and continue
        str = str.substring(1);
    }

    return lgStr;
}

function isExist(str, ch) {
    let i = 0;
    let exist = false;
    while (!exist && i < str.length) {
        exist = str.charAt(i) === ch;
        i++;
    }
    return exist;
}
