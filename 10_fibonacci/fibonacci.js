const fibonacci = function(n) {
  const arr = Array(n);
  const lastTwoNums = are.reduce(lastTwoNums => {
    const currNum = lastTwoNums[0] + lastTwoNums[1];
    return [lastTwoNums[1], currNum];
  }, [1, 1]);
  return lastTwoNums[1];
};

// Do not edit below this line
module.exports = fibonacci;
