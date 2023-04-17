const numbers = [32, 53, 23, 64, 98];

const student = {
     name: 'Mr. X',
     age: 32,
     job: 'bekar',
     movies: ['a', 'b', 'c']
};

//1. template string

const about = `My Name is ${student.name} age of ${student.age} has ${numbers[2]} cars, and his famous movie name is ${student.movies[1]}.`;
console.log(about);

//2. arrow function

const getSixtyFive = () => 65;
const addFiftyFive = num => num + 55;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
     const sum = num1 + num2;
     return sum;
};

// 3. spread operator

const newNumber = [...numbers];

// create a new array from an older array and add an element
const currentNewNumber = [...numbers, 44, 22];

numbers.push(55)
numbers.push(75)
numbers.push(84)

console.log(newNumber);
console.log(currentNewNumber);
console.log(numbers);