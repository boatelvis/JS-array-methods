const names = ["Eric", "Alfred", "Aikins", "Elvis", "Gifty"];

const eNames = names.filter((name) => name.startsWith("E"));
console.log(eNames);

const people = [
    { name: "Eric", town: "Santasi" },
    { name: "Alfred", town: "Tema" },
    { name: "Aikins", town: "Sunyani" },
    { name: "Elvis", town: "Legon" },
    { name: "Gifty", town: "Tanoso" }
];

const aPeople = people.filter(({ name }) => name.startsWith("A"));
console.log(aPeople);