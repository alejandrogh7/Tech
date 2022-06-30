function DecimalToBynary(num) {
  // Your code here:
  let binary = "";
  while (num) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

module.exports = DecimalToBynary;

console.log(DecimalToBynary(4)); // 100

console.log(DecimalToBynary(7)); // 111

console.log(DecimalToBynary(10)); //1010
