const numbers = [2, 6, 3, 4, 1, 5];
console.log(numbers.sort());

const names = ["Eric", "Alfred", "Aikins", "Elvis"];
console.log(names.sort());

const people = [
    {id: 6, name: "Jack"},
    {id: 1, name: "Sam"},
    {id: 3, name: "Saly"}
];

people.sort((a, b) => a.id - b.id);
console.log(people);

const unchanging = [2, 6, 3, 4, 1, 5];
const newNumbers = [...unchanging].sort();

console.log(newNumbers);
console.log(unchanging);

// reverse
console.log(numbers.reverse());
console.log([...unchanging].sort().reverse());
