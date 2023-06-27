/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    stringNum = n.toString();
    digitsCharArr = Array.from(String(stringNum));
    digitsNumsArr = digitsCharArr.map((dig) => Number(dig));
    
    
    sumSquareDigits = digitsNumsArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue**2,
  0
);

res=true;
if (sumSquareDigits === 1 ){
    console.log(res);  
    return res;
      
 
} else if (sumSquareDigits !== 1 && sumSquareDigits.toString().length !== 1){ isHappy(sumSquareDigits) }

else {
    res=false;
    console.log(res);
    return res;
}
};

isHappy(2);