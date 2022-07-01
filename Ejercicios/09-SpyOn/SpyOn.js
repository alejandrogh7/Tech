function spyOn(fn) {
  // Your code here:

  let callCount = 0;
  let calledWith = new Map();
  let calledReturn = new Map();

  const spy = (...args) => {
    for (const arg of args) calledWith.set(arg, true);
    callCount++;
    const result = fn(...args);
    calledReturn.set(result, true);
    return result;
  };

  spy.getCallCount = () => callCount;

  spy.wasCalledWith = (value) => {
    return calledWith.get(value) ? true : false;
  };

  spy.returned = (value) => {
    return calledReturn.get(value) ? true : false;
  };
  return spy;
}

module.exports = spyOn;
