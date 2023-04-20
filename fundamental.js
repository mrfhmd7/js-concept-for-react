//1. How to declare a variable using let and const
const fatherName = 'Mr. Y';
let season = 'rainy';
season = 'winter';

//2. conditions
//6 basic conditions: >,<, ===, !==, <=, >=
//multiple conditions: &&, ||
if (fatherName === 'Mr. X' || season === 'rainy') {

}
else if (fatherName === 'Mr. Y') {

}
else {

}

//3. array declare
// index, length, push, pop
const numbers = [32, 53, 23, 64, 98];
numbers[0] = 45;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
     const number = numbers[i];
     console.log(number);
}

//5. function
function multiply(num1, num2) {
     const result = num1 * num2;
     return result
}

multiply(4, 6);

//6. object
const student = {
     name: 'Mr. X',
     age: 32,
     job: 'bekar'
};
