function intersection(arr1, arr2) {
  // Your code here:

  const arr = [];
  for (const num1 of arr1) arr[num1] = true;
  return arr2.filter((num2) => arr[num2]);
}

//return arr1.filter((num1) => arr2.includes(num1));

// let result;
// let i = 0;
// let j = 0;

// while (i < arr1.length && j < arr2.length) {
//   const num1 = arr1[i];
//   const num2 = arr2[j];

//   if (num1 === num2) {
//     result.push(num1);
//     i++;
//     j++;
//   } else if (num1 < num2) i++;
//   else j++;
// }

// return result;

// const hashMap = {};
//   for (const num1 of arr1) hashMap[num1] = true;
//   return arr2.filter((num2) => hashMap[num2]);

//MEJOR
// const arr = [];
//   for (const num1 of arr1) arr[num1] = true;
//   return arr2.filter((num2) => arr[num2]);

// const hashMap = new Map();
// for (const num1 of arr1) hashMap.set(num1, true);
// return arr2.filter((num2) => hashMap.get(num2));

module.exports = intersection;

console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])); //[3,10]

console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])); //[]

console.log(intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])); //[3, 10]
