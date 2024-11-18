const fibonacci = function (n) {
  n = parseInt(n);
  if (n < 0) {
    return "OOPS"
  }
	else if (n > 1) {
		const arr = Array.from(Array(n - 2));
		const lastTwoNums = arr.reduce(
			(lastTwoNums) => {
				const currNum = lastTwoNums[0] + lastTwoNums[1];
				return [lastTwoNums[1], currNum];
			},
			[1, 1]
		);
		return lastTwoNums[1];
	} else if (n === 1) {
		return 1;
	} else return 0;
};

// Do not edit below this line
module.exports = fibonacci;
