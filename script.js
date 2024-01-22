function factorialFromDefinition(n) {
    if (n == 0) return 1;
    return n * factorialFromDefinition(n - 1);
}

for (let i = 0; i < 8; i++) {
    console.log("factorial(" + i + ") = " + factorialFromDefinition(i));
}
factorial(0) = 1
factorial(1) = 1
factorial(2) = 2
factorial(3) = 6
factorial(4) = 24
factorial(5) = 120
factorial(6) = 720
factorial(7) = 5040
const factorialFromDefinitionArrow =
    n => n == 0 ? 1 : n * factorialFromDefinitionArrow(n - 1);ň