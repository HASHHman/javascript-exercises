const removeFromArray = function(array, ...unwantedValues) {
    function isWanted(item) {
        for (const unwantedValue of unwantedValues) {
            if (item === unwantedValue) {
                return false;
                break
            };
        }
        return true;
    }
    const resultArray = array.filter(isWanted);
    //console.log(resultArray);
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
