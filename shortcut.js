// 'a', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy

let myVar = 5;
if (myVar) {
     myVar = myVar * 100;
}
else {
     myVar = 0;
}

// check falsy

let myMoney = 50;
if (!myMoney) {
     console.log('fokir');
}

const money = 100;
let food;
if (money > 110) {
     food = 'kacci';
}
else {
     food = 'biscuit';
}

// ternary

let khana = money > 110 ? 'kacci' : 'biscuit';

let drink = (money > 80 && myVar < 20) ? 'Dew' : 'mineral water';
// console.log(drink);

//number to string conversion

const num1 = 96;
const numStr = num1 + '';
// console.log(numStr);

// string to number

const input = '4578';
const inputNumber = +input;
// console.log(inputNumber);

//

let isActive = true;
const showUser = () => console.log('Load User');
const hideUser = () => console.log('Hide User');

isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive; // negation

const x = 50;
const y = 80;
const obj = {
     x: x,
     y: y
};

//shortcut

const obj1 = { x, y };

const name = 'Mr. X';
const address = 'Dhaka';

const details = {
     name: name,
     address: address
};

const details1 = { name, address };