const numbers = [10, 20, 30, 40, 50];

const numbersTimes10 = numbers.map((v) => v*10);
console.log(numbersTimes10);

const numbersTimes10Obj = numbers.map((v) => ({value: v*10}));
console.log(numbersTimes10Obj);

const numbersWithNegatives = [10, -20, 30, -40, 50];
const allNegativeNumbersTimes10 = numbersWithNegatives.filter((v) => v < 0).map((v) => ({value: v*10}));
console.log(allNegativeNumbersTimes10);

const people = [
    {first: "John", last: "Doe", address: {city: "Oakland"}},
    {first: "Jane", last: "Doe", address: {city: "Texas"}}
];

const cheapClone = (obj) => JSON.parse(JSON.stringify(obj));

const fullName = people.map((p) => cheapClone({
    ...p,
    fullName: `${p.first} ${p.last}`
}));

console.log(fullName);
fullName[0].first = "James";
console.log(fullName);
console.log(people);
fullName[0].address.city = "San Jose";
console.log(fullName);
console.log(people);