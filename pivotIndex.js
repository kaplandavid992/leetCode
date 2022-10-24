

var pivotIndex = function (nums) {
 
  function sumOfArrEls(arr){
  return arr.reduce(
    (totalValue, currentValue) => {
      return totalValue + currentValue
  }, 0);
 }

  for(let i=0;i<=nums.length-1 ;i++){
    let leftSideArr=[0];
    if(i>0){
    leftSideArr = nums.slice(0, i)};
  
    let rightSideArr = nums.slice(i+1);
   
    if ( sumOfArrEls(rightSideArr) === sumOfArrEls(leftSideArr) || i===0 && sumOfArrEls(rightSideArr)===0)
    
    return i; 
  }
  return -1;
}




