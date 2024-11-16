const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(arr = []) {
	return arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = function(arr = []) {
  return arr.reduce((result, num) => {
    return result * num;
  }, 1)
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum;
};

const factorial = function(num) {
	const arr = Array.from({length: num}, (_, i) => i + 1)
  return arr.reduce((result, num) => {
    return result * num;
  }, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
