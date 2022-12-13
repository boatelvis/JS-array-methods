const numbers = [10, -20, 30, -40, 50, -60];

const allPositives = numbers.filter((v) => v > 0);
console.log(allPositives);

const allNegatives = numbers.filter((v) => v < 0);
console.log(allNegatives);

const allPositivesLessThan50 = numbers.filter((v) => v > 0).filter(v => v < 50);
console.log(allPositivesLessThan50);



