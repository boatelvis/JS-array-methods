// TASK 1: Create an array of numbers from 5 to 45
const arrayOfNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];

// TASK 2: Write a code to print the index of the array
for(const i in arrayOfNumbers){
    console.log(i);
}

//TASK3: Write a code to stop printing the index when it reaches 4
for(const i in arrayOfNumbers){
    if(i > 5){
        break;
    }
    console.log(i)
}

//TASK4: Write a code to print the elements of the array
for(const value of arrayOfNumbers){
    console.log(value);
}

// TASK5: Write a code to stop printing the elements of the array when it reaches 25
for(const value of arrayOfNumbers){
    if(value > 25){
        break;
    }
    console.log(value)
}

// TASK6: Create an anrray of strings and repeat steps 2 and 4
const arrayOfStrings = ["He is a good boy", "The woman is beautiful", "The man is brave", "She is smart", "I love coding"];

for(const i in arrayOfStrings){
    console.log(i);
}

for(const value of arrayOfStrings){
    console.log(value);
}