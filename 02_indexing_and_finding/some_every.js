const arrayOfNumbers = [10, 20, -30, 40, -50];

console.log(arrayOfNumbers.includes(10));

const allPositives = arrayOfNumbers.some((num) => num > 0);
console.log(allPositives);

const allNegatives = arrayOfNumbers.some((num) => num <0);
console.log(allNegatives);

const allNumbers = arrayOfNumbers.every((num) => num > 0);
console.log(allNumbers);