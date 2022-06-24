function FindNeedle(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, needle.length + i) === needle) return i;
  }
  return -1;
}

//forma 1 : O(N*M)
// for (let i = 0; i < haystack.length; i++) {
//   for (let j = 0; j < needle.length; j++) {
//     //recorro i, por cada valor de i recorro j y matcheo
//     //si son diferentes rompo el bucle
//     //si j es igual al largo de needle - 1, entonces duelvo i porque ahí empezó a matchear y no se rompió
//     if (haystack[i + j] !== needle[j]) {
//       break;
//     }
//     if (j === needle.length - 1) return i;
//   }
// }
// return -1;

//forma 2: O(N*N)
// for (let i = 0; i < haystack.length; i++) {
//   if (haystack.slice(i, needle.length + i) === needle) return i;
// }
// return -1;

module.exports = FindNeedle;

console.log(FindNeedle("react-redux", "redux")); //(6);

console.log(FindNeedle("pinky", "puntual")); //(-1);

console.log(FindNeedle("rereredux", "reredux")); //(2);
