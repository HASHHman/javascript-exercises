const palindromes = function (s = '') {
  const formattedString = s.replaceAll(/\W/g, '').toLowerCase();
  const originalArray = formattedString.split('');
  const reversedArray = originalArray.toReversed();
  return originalArray.every((char, index) => reversedArray[index] === char);
};

// Do not edit below this line
module.exports = palindromes;
