
var twoSum = function(nums, target) {
    
    let res = [];

   const numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    if (numMap.has(complement)) {
      res.push(numMap.get(complement));
      res.push(i);
      return res;
    }
    numMap.set(currentNum, i);
  }
};


