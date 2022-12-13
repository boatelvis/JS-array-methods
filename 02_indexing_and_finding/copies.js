const numbers = [10, 15, 20, 25, 30];

console.log(numbers);

const copyOfNumbers = [...numbers];
copyOfNumbers[4] = 5;
copyOfNumbers[5] = 12;

console.log(copyOfNumbers);
console.log(numbers)


const people = [{name: "Fred"}, {name: "Junior"}];

const copyOfPeople = [...people];

copyOfPeople[1].name = "Alex";
console.log(copyOfPeople);
console.log(people);