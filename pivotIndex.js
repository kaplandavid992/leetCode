
var pivotIndex = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let rightSideSum = 0;
  let leftSideSum = 0;
  let addRight = true;
  let addLeft = true;

  const addRightFig = () => {
    i++;
    addLeft = true;
    addRight = false;
  };

  const addLeftFig = () => {
    j--;
    addRight = true;
    addLeft = false;
  };

  const sumsAreBothNeg = () => {
    return leftSideSum < 0 && rightSideSum < 0;
  };

  while (j >= i + 1) {
    addRight ? (rightSideSum += nums[j]) : null;
    addLeft ? (leftSideSum += nums[i]) : null;

    if (leftSideSum > rightSideSum || (leftSideSum < 0 && rightSideSum >= 0)) {
    } else if (
      leftSideSum < rightSideSum ||
      (rightSideSum < 0 && leftSideSum >= 0)
    ) {
      sumsAreBothNeg() ? addLeftFig() : addRightFig();
    } else {
      i++;
      j--;
      addLeft = true;
      addRight = true;
    }
  }

  if (leftSideSum === rightSideSum && i === j) {
    return i;
  } else if (leftSideSum === 0 || rightSideSum === 0) {
    return 0;
  } else {
    return -1;
  }
};

