var runningSum = function(nums) {
    const number=[0];
    nums.forEach((num,index)=>{
        number.push(num+number[index]);
    })
    number.shift();
    return number;
};