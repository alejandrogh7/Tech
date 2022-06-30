function subSetSum(nums, target) {
  // Your code here:
  let sums = new Set();
  sums.add(0);

  for (const num of nums) {
    //update the nums array
    const sumsCopy = [...sums];
    for (const sum of sumsCopy) {
      const currentSum = num + sum;

      if (currentSum === target) return true;
      else if (currentSum < target) sums.add(currentSum);
    }
  }
  return false;
}

module.exports = subSetSum;
