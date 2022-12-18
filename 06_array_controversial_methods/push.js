const original = [1, 2, 3, 4, 5];

const originalRef = original;

console.log(originalRef === original);

console.log(original);
original.pop();
console.log(original);
original.push(7);
console.log(original);

console.log(originalRef);

console.log(originalRef === original);

// let aNumber = 5;
// const stateManager = aNumber;
// console.log(stateManager === aNumber);
// aNumber = 6;
// console.log(stateManager === aNumber);