const convertToCelsius = function(F) {
  const unRoundedCel = (F - 32) * 5 / 9;
  const roundedCel = Math.round(unRoundedCel * 10) / 10;
  return roundedCel;
};

const convertToFahrenheit = function(cel) {
  const unRoundedF = cel * 9 / 5 + 32;
  const roundedF = Math.round(unRoundedF * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
