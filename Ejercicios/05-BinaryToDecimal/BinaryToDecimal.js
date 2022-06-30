function BinaryToDecimal(binary) {
  // Your code here:
  let decimal = 0;
  let exp = binary.length;
  while (exp > 0) {
    decimal += parseInt(binary[binary.length - exp]) * 2 ** (exp - 1);
    exp--;
  }
  return decimal;
}

module.exports = BinaryToDecimal;

console.log(BinaryToDecimal("10")); // 2

console.log(BinaryToDecimal("111")); // 7

console.log(BinaryToDecimal("1010")); // 10

console.log(BinaryToDecimal("100")); // 4
