//4 - 4/3 + 4/5 - 4/7

const calculatePi = (numOfIter) => {
    let num = 4;
    let below = 3;
    for (let i = 0; i < numOfIter; i++) {
        if (i % 2 == 0) {
            num -= 4 / below;
        } else {
            num += 4 / below;
        }
        below += 2;
    }
    return num;
};
console.log(calculatePi(100000000)); //10mrd
