const values = [1, 2, 4, 5, 6];

values.splice(2, 0, 3);
console.log(values);

values.splice(2, 1);
console.log(values);

values.splice(5, 0, 7);
console.log(values);

values.splice(5, 0, 6);
console.log(values);

values.splice(5, 1);
console.log(values);