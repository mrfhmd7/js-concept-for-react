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

//2. object destructuring

const { name, age} = {name: 'Mr. X', age: 18};
const { id, salary} = {id: 1, name: 'Mr. Y', salary: 2500, age: 22};

const employee = {
     name: 'Mr. X',
     ide: 'VS code',
     designation: 'developer',
     device: 'asus',
     languages: ['html', 'css', 'js'],
     specification: {
          height: 66,
          weight: 67,
          address: 'dhanmondi',
          drink: 'water',
          watch: {
               color: 'black',
               price: 500,
               brand: 'garmin'
          }
     }
}

const { device, ide } = employee;
const { weight, address } = employee?.specification;
const {brand} = employee?.specification?.watch;