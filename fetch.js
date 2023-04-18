//1. JSON => stringify, parse 
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

const employeeJSON = JSON.stringify(employee);
// console.log(employee);
// console.log(employeeJSON);

const employeeObj = JSON.parse(employeeJSON);
// console.log(employeeObj);

//2. fetch

// fetch('url')
//      .then(res => res.json())
//      .then(data => console.log(data));

//keys, values

const keys = Object.keys(employee);
// console.log(keys);

const values = Object.values(employee);
// console.log(values);

const numbers = [23, 32, 45, 54, 66, 77];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array like Object
//loop on an object using for in

// add or remove from an array
const products = [
     { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
     { name: 'phone', price: 30000, brand: 'nokia', color: 'golden' },
     { name: 'watch', price: 320, brand: 'Rolex', color: 'Black' },
     { name: 'sunGlass', price: 200, brand: 'Rayban', color: 'yellow' },
     { name: 'camera', price: 3200, brand: 'Canon', color: 'gray' }
];

const newProduct = {name: 'webcam', price: 3400, brand:'Lal' };

//copy product array and then add newProduct

const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone means create new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);