const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const[first, second, third, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);
