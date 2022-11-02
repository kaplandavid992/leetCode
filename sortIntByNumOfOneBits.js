const a = [1111, 7644, 1107, 6978];

function getBinary(num) {
  return num.toString(2);
}

function getNumOfOnes(binaryNumString) {
  const charArr = binaryNumString.split("");
  const splittedBinaryArr = charArr.map((char) => {
    return parseInt(char, 10);
  });
  const numOfOnes = splittedBinaryArr.reduce((totalValue, currentValue) => {
    return totalValue + currentValue;
  }, 0);
  return numOfOnes;
}

var sortByBits = function (arr) {
  const res = arr.sort((numA, numB) => {
    if (getNumOfOnes(getBinary(numA)) === getNumOfOnes(getBinary(numB))) {
      return numA - numB;
    } else if (
      (getNumOfOnes(getBinary(numA)) > getNumOfOnes(getBinary(numB)) &&
        numA > numB) ||
      (getNumOfOnes(getBinary(numA)) < getNumOfOnes(getBinary(numB)) &&
        numA < numB)
    ) {
      return numA - numB;
    } else if (
      (getNumOfOnes(getBinary(numA)) > getNumOfOnes(getBinary(numB)) &&
        numA < numB) ||
      (getNumOfOnes(getBinary(numA)) < getNumOfOnes(getBinary(numB)) &&
        numA > numB)
    ) {
      return numB - numA;
    }
  });

  return res;
};
