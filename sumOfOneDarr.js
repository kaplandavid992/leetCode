
 var runningSum = function(nums) {
    let result=[];
     function sum(arr){
   return arr.reduce(
     (totalValue, currentValue) => {
       return totalValue + currentValue
   }, 0);
  }
     
    for(let i=0; i<nums.length; i++){
        let tempArr = nums.slice(0,i+1);
        result.push(sum(tempArr));
    }
     return result;
 };