class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.concat(str);
  }

  padStart(str) {
    this.#value = str.concat(this.#value);
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const divider = "-".repeat(50);
console.log(`${divider}\nThe third task\n${divider}`);
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
