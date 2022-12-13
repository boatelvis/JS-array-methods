/* 
   This test combines the knowledge of for loops, for in, for of and forEach
   1. Write a code to print numbers from 1 to 7.5 with an interval of 1.5 and save the output in an array
   (HINT: use for loop)
   2. Write a code to print the index and element of the array. HINT: use for in and for of
   3. Repeat task 2 using forEach
*/

// Printing numbers from 1 to 7 with an interval of 1.5 and storing the output in an array
const numbers = [];
for(let value = 1; value < 8; value += 1.5){
    numbers.push(value);
}

// Print the index of the elements of the numbers array 
for(const i in numbers){
    console.log(i);
}

// Print the elements of the numbers array 
for(const value of numbers){
    console.log(value);
}

// Print the elements and the index of the numbers array for forEaach
numbers.forEach((element, index) => {
    console.log(element);
    console.log(index);
})