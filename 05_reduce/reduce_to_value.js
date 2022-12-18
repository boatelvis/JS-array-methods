const numbers = [40, 20, 70, 9, 33, 28, 45, 52];

let sum = 0;

for(const value of numbers){
    sum += value;
}

console.log(sum);

const newSum = numbers.reduce((sum, value) => {
    sum += value;
    return sum;
}, 0)

console.log(newSum);

const otherSum = numbers.reduce((sum, value) => sum += value, 0);
console.log(otherSum);

const avgNum = numbers.reduce((avg, value, _, arr) => avg + value / arr.length, 0);
console.log(avgNum);

const names = ["LG", "Mimi", "Sadie", "Ripley"];

const otherName = names.reduce((str, name, index) => str + (index > 0 ? ", " : "") + name, "");
console.log(otherName);

const newName = names.join(" ,")
console.log(newName);