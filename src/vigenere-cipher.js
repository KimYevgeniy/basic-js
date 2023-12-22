const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }
  encrypt(str, key) {
    if (arguments.length !== 2 || str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const base = 97;

    let keys = key
      .toLowerCase()
      .split("")
      .map((char) => char.charCodeAt(0) - base);

    let p = 0;

    let result = "";

    for (let i = 0; i < str.length; i++) {
      let temp = str.toLowerCase().charCodeAt(i);
      if (temp > 96 && temp < 123) {
        let ascii = temp + keys[p];
        if (ascii > 122) {
          ascii -= 26;
        }

        if (p === key.length - 1) {
          p = 0;
        } else {
          p++;
        }
        result += String.fromCharCode(ascii);
      } else {
        result += str[i];
      }
    }
    return this.processResult(result.toUpperCase());
  }
  decrypt(str, key) {
    if (arguments.length !== 2 || str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const base = "a".charCodeAt(0);
    let keys = key
      .toLowerCase()
      .split("")
      .map((char) => char.charCodeAt(0) - base);

    let p = 0;

    let result = "";

    for (let i = 0; i < str.length; i++) {
      let temp = str.toLowerCase().charCodeAt(i);

      if (temp > 96 && temp < 123) {
        let ascii = temp - keys[p];

        if (ascii < 97) {
          ascii += 26;
        }

        if (p === key.length - 1) {
          p = 0;
        } else {
          p++;
        }

        result += String.fromCharCode(ascii);
      } else {
        result += str[i];
      }
    }

    return this.processResult(result.toUpperCase());
  }
  processResult(result) {
    return this.reverse ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
