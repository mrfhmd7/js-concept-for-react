const person = {
     name: 'Lal Nil Mia',
     profession: 'Traffic Surgeon',
     age: 35,
     25: 'Summer',
     'son-name' : 'Jack',
     address: 'New Street'
}

// dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName]
// console.log(prof3);

const season = person[25];
const sonName = person['son-name']
console.log(sonName);