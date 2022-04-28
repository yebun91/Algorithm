/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let number = x+"";
  let result = false
  if (number === number.split("").reverse().join("")) result = true;
  return result;
};