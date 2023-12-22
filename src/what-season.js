const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }
  if (date.hasOwnProperty("toString")) {
    throw new Error("Invalid date!");
  }

  const seasons = ["spring", "summer", "autumn", "winter"];

  const formatedDate = date.toLocaleDateString("en-US", { month: "numeric" });

  if (formatedDate > 2 && formatedDate < 6) {
    return seasons[0];
  } else if (formatedDate > 5 && formatedDate < 9) {
    return seasons[1];
  } else if (formatedDate > 8 && formatedDate < 12) {
    return seasons[2];
  } else {
    return seasons[3];
  }
}

module.exports = {
  getSeason,
};
