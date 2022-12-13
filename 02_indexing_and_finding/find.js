const names = ["John", "Doe", "Jane", "Bruce", "John"];

console.log(names.find((value) => value === "Doe"));

const one_name = names.find((value) => value === "Bruce");
console.log(one_name);

const people = [{firstName: "John", lastName: "Doe"}, {firstName: "Jane", lastName: "Doe"}];

const person = people.find((p) => p.firstName === "Jane");
console.log(person);

person.lastName = "Doees";
console.log(people);