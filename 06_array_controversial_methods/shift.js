const original = [1, 2, 3, 4, 5];

console.log(original);
console.log(original.shift());
console.log(original);
original.unshift(9);
console.log(original);

const unchanging = [1, 2, 3, 4, 5];
console.log(unchanging);
//shift
const [value, ...rest] = unchanging;
console.log(value);
console.log(rest);

//unshift
const newArray = [8, ...unchanging];
console.log(newArray);

console.log(unchanging);