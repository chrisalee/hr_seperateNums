/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        let curIdx = i + 1;
        let firstNum = BigInt(s.slice(0, curIdx));
        let curNum = firstNum;
        while(true) {
            if(s[curIdx] === undefined) return console.log('YES', firstNum.toString());
            // console.log(`YES ${firstNum}`);
            let nextNum = curNum + BigInt(1);
            let nextStr = nextNum.toString();
            if (s.slice(curIdx, curIdx + nextStr.length) !== nextStr) break;
            curIdx += nextStr.length;
            curNum = nextNum;
        }
    }
    return console.log('NO');
}
