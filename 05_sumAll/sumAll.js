const sumAll = function (num1, num2) {
	if ((num2 < 0) | (num1 < 0)) {
		return "ERROR";
	} else if ((Math.floor(num1) != num1) | (Math.floor(num2) != num2)) {
		return "ERROR";
	} else if (typeof num1 != "number" | typeof num2 != "number") {
        return "ERROR";
    };
	let sum = 0;
	if (num2 < num1) {
		for (let index = num2; index < num1 + 1; index++) {
			sum += index;
		}
	} else {
		for (let index = num1; index < num2 + 1; index++) {
			sum += index;
		}
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
