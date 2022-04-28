/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let number = x+"";
  if(number === number.split("").reverse().join("")){
    return true;
  }else{
    return false;
  }
};