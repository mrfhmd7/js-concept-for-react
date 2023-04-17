//1. array destructuring 

const numbers = [23, 53];
// const x = numbers[0];
// const y = numbers[1];

// const [x , y] = [23, 65];

const [x, y] = numbers;
console.log(x, y);

function boxify (num1, num2){
     const nums = [num1, num2];
     return nums;
}

const [first, second ] = boxify(34, 54);

// console.log(boxify(34, 54));