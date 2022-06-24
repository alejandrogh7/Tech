function HasBalancedBrackets(string) {
  // Your code here:
  const open = ["(", "[", "{", "<"];
  const close = [")", "]", "}", ">"];
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];

    //si abro
    if (open.includes(bracket)) stack.push(bracket);

    //si cierro
    if (close.includes(bracket)) {
      switch (bracket) {
        case "]":
          if (
            stack[stack.length - 1] === "(" ||
            stack[stack.length - 1] === "{"
          ) {
            return false;
          } else if (stack[stack.length - 1] === "[") {
            stack.pop();
            continue;
          }
        case ")":
          if (
            stack[stack.length - 1] === "[" ||
            stack[stack.length - 1] === "{"
          ) {
            return false;
          } else if (stack[stack.length - 1] === "(") {
            stack.pop();
            continue;
          }
        case "}":
          if (
            stack[stack.length - 1] === "(" ||
            stack[stack.length - 1] === "["
          ) {
            return false;
          } else if (stack[stack.length - 1] === "{") {
            stack.pop();
            continue;
          }
        default:
          return ":)";
      }
    }
  }
  return stack.length === 0 ? true : false;
}

module.exports = HasBalancedBrackets;

console.log(HasBalancedBrackets("{ [ ] ( ) }")); //true

console.log(HasBalancedBrackets("{ [ ( ] ) }")); //false

console.log(HasBalancedBrackets("{ [ ] ) }")); //false

console.log(HasBalancedBrackets("{ [ }")); //false

console.log(HasBalancedBrackets("{ [ ( [ { ( )[ ]{ } } ] ) ] }")); //true
