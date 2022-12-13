const people = [
    {first: "John", last: "Doe"},
    {first: "Jane", last: "Doe"}
];

const fullName = people.map((p) => ({
    ...p,
    fullName: `${p.first} ${p.last}`
}));

console.log(fullName);