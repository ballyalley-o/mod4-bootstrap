// const breakingBadCharacters = {
//   firstName: 'Walter',
//   lastName: 'White',
//   age: 54,
//   email: 'iamthedanger@graymatter.com',
//   hobbies: ['some chemistry shit', 'making meth', 'creating chaos', 'making sense'],
//   address: {
//     street: '308 Negra Arroyo Lane',
//     city: 'Albuquerque',
//     state: 'New Mexico',
//     postalCode: '87104'
//   },
//   getBirthYear: function() {
//     return (new Date()).getFullYear() - 1958;
//   }

// }

// let val;

// val = breakingBadCharacters;
// val = breakingBadCharacters.getBirthYear();



// console.log(val);



// const characters = [
//   {name: 'Jesse Pinkman', age: 25},
//   { name: 'Tuco Salamanca', age: 39},
//   { name: 'Skyler White', age: 42},
//   { name: 'Gus Fring', age: 49},
//   { name: 'Saul Goodman', age: 41},
//   { name: 'Skinny P', age: 26},
//   { name: 'Badger Mayhew', age: 24}
// ];

// for(let i = 0; 0 < characters.length; i++) { 
//   console.log(characters[i].age);
// };

// const color = 'red';

// if(color === 'red') {
//   console.log('color is red');

// }

// const name = 'brody';
// const age = '84';

// if(age > 0 && age < 12) {
//   console.log(`${name},`, ' you are a child');
// } else if(age > 12 && age < 18) {
//   console.log(`${name},`, ' you are a teenager');
// } else if(age > 18 && age < 60) {
//   console.log(`${name},`, ' you are an adult');
// } else {
//   console.log(`${name},`, ' you are super old');
// }


// if (age < 16 || age > 60) {
//   console.log(`${name},`, ' you are not allowed to race');
// } else {
//   console.log(`${name},`, ' you are now registered')
// };


// const color = 'red';

// switch(color) {
//   case 'red' :
//     console.log('color is red');
//   break;
//   case 'blue':
//     console.log('color is blues');
//     break;
//  default:
//     console.log('color is neither red nor blue');
//     break;
// }


// const greet = (firstName = 'John', lastName = 'Doe') => { return 'Hello' + ' ' + firstName + ' ' + lastName;
// }

// console.log(greet('Dance', 'Dancey'));

// (function greet(firstName = 'John', lastName = 'Doe') {
//   console.log('Hello ' + firstName + ' ' + lastName);
// })('Belly');


//  