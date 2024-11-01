const reverseString = function(string) {
    let splittedString = string.split('');
    let outputString = splittedString.reverse().join('');
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
