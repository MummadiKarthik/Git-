class Calculator {
  add(a, b, c) {
    if (c !== undefined) return a + b + c;
    if (b !== undefined) return a + b;
    return a;
  }
}

const calc = new Calculator();
console.log(calc.add(1, 2));    // 3
console.log(calc.add(1, 2, 3)); // 6