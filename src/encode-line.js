const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let count = 1;

  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (count === 1) {
        result += `${arr[i]}`;
      } else {
        result += `${count}${arr[i]}`;
      }
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
