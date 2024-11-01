const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    };
    
    let outPutString = "";
    for (let i = 0; i < num; i++) {
        outPutString = outPutString + string;
    }
    return outPutString;
};

// Do not edit below this line
module.exports = repeatString;
