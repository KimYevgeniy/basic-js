const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  let result = "";

  for (let i = 0; i < (repeatTimes || 1); i++) {
    result += str;
    for (let j = 0; j < (additionRepeatTimes || 1); j++) {
      if (addition === false) {
        result += "false";
      } else if (addition === null) {
        result += "null";
      } else {
        result += addition || "";
      }
      if (additionRepeatTimes - j !== 1 && additionRepeatTimes) {
        result += additionSeparator || "|";
      }
    }
    if (repeatTimes - i !== 1 && repeatTimes) {
      result += separator || "+";
    }
  }

  return result;
}

module.exports = {
  repeater,
};
