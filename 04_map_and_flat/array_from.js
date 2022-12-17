const numbers = [10, 20, 30, 40, 50];

console.log(Array.from(numbers, (v) => v * 10));

const numbersWithNegatives = [10, -20, 30, -40, 50];

console.log(Array.from(numbersWithNegatives, (v) => v > 0));

// const numbersTimes10Obj = Array.from(numbers, (v) => ({value: v *10}));
// console.log(numbersTimes10Obj);