// factorial(5) = 120 = 1 * 2 * 3 * 4 * 5
const factorialNoRecursion = (num) => {
  let x = 1;
  for (let i = 1; i <= num; i++) {
    x *= i
  }
  return x;
};

const factorialRecursion = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num * factorialRecursion(num - 1)
    }
}


// const factorialRecursion = (num) =>
//   num === 1 ? 1 : num * factorialRecursion(num - 1);

// const factorialNoRecursion = (num) =>
//   Array.from({ length: num }, (v, i) => i + 1).reduce((a, b) => a * b);


console.log('No recursion', factorialNoRecursion(6));
console.log('With recursion', factorialRecursion(6));