function MaxValue(shares) {
  // Your code here:
  let maxProfit = -Infinity;
  let min = shares[0];
  for (let i = 1; i < shares.length; i++) {
    const sell = shares[i];
    const profit = sell - min;
    if (sell < min) min = sell;
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
}

//Solucion O(N*N)
// let maxProfit = -Infinity;
// for (let i = 0; i < shares.length - 1; i++) {
//   const buy = shares[i];
//   for (let j = i + 1; j < shares.length; j++) {
//     const sell = shares[j];
//     const profit = sell - buy;

//     if (profit > maxProfit) maxProfit = profit;
//   }
// }
// return maxProfit;

module.exports = MaxValue;

console.log(MaxValue([4, 3, 2, 5, 11])); //9

console.log(MaxValue([1, 3, 2, 5, 11])); //10

console.log(MaxValue([23, 7, 3, 4, 8, 6])); //5
