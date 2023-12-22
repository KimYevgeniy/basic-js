const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split("~~").filter((link) => link !== "").length;
  },
  addLink(value) {
    if (this.chain[this.chain.length - 1] === ")") {
      this.chain += `~~( ${value} )~~`;
    } else {
      this.chain += `( ${value} )~~`;
    }

    return this;
  },
  removeLink(position) {
    const length = this.getLength();

    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > length ||
      !Number.isInteger(position)
    ) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }

    const links = this.chain.split("~~").filter((link) => link !== "");
    links.splice(position - 1, 1);
    this.chain = links.join("~~");

    return this;
  },
  reverseChain() {
    const links = this.chain.split("~~").filter((link) => link !== "");
    this.chain = links.reverse().join("~~") + "~~";
    // console.debug(this);
    return this;
  },
  finishChain() {
    const result = this.chain.slice(0, -2);
    this.chain = "";
    return result;
  },
};

module.exports = {
  chainMaker,
};
