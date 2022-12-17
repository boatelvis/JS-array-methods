const first = [10, 20, 30];

const second = [40, 50, 60];

console.log(first.concat(second));

console.log([...first, ...second]);

console.log(first.concat(second).map((v) =>v * 12));