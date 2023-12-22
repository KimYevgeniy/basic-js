const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  let resultArr = [...arr];
  resultArr.forEach((element, index) => {
    if (element === "--double-next") {
      if (index === arr.length - 1) {
        resultArr.splice(index, 1);
      } else {
        resultArr[index] = resultArr[index + 1];
      }
    }
    if (element === "--double-prev") {
      if (index === 0) {
        resultArr.splice(index, 1);
      } else {
        resultArr[index] = resultArr[index - 1];
      }
    }
    if (element === "--discard-next") {
      if (index === arr.length - 1) {
        resultArr.splice(index, 1);
      } else {
        resultArr[index] = undefined;
        resultArr[index + 1] = undefined;
      }
    }
    if (element === "--discard-prev") {
      if (index === 0) {
        resultArr.splice(index, 1);
      } else {
        resultArr.splice(index - 1, 2);
      }
    }
  });
  resultArr = resultArr.filter((element) => element !== undefined);
  return resultArr;
}

module.exports = {
  transform,
};
