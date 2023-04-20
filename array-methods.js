const products = [
     { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
     { name: 'phone', price: 30000, brand: 'iphone', color: 'golden' },
     { name: 'watch', price: 320, brand: 'Rolex', color: 'Black' },
     { name: 'sunGlass', price: 200, brand: 'Rayban', color: 'yellow' },
     { name: 'camera', price: 3200, brand: 'Canon', color: 'gray' }
];

//1. map
const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

//2. forEach

// products.forEach(product => console.log(product.color));

//3. filter

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('l'));
// console.log(specificName);

//4. find

const special = products.find(product => product.name.includes('n'));
console.log(special);