function calculator(a, b, c) {
  if (c === "+") return a + b;
  if (c === "-") return a - b;
  if (c === "*") return a * b;
  if (c === "/") return a / b;
}

module.exports = calculator;
