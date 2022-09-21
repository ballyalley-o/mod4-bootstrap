const breakingBadCharacters = {
  firstName: 'Walter',
  lastName: 'White',
  age: 54,
  email: 'iamthedanger@graymatter.com',
  hobbies: ['some chemistry shit', 'making meth', 'creating chaos', 'making sense'],
  address: {
    street: '308 Negra Arroyo Lane',
    city: 'Albuquerque',
    state: 'New Mexico',
    postalCode: '87104'
  },
  getBirthYear: function() {
    return (new Date()).getFullYear() - 1958;
  }

}

// let val;

// val = breakingBadCharacters;
// val = breakingBadCharacters.getBirthYear();



// console.log(val);



const characters = [
  {name: 'Jesse Pinkman', age: 25},
  { name: 'Tuco Salamanca', age: 39},
  { name: 'Skyler White', age: 42},
  { name: 'Gus Fring', age: 49},
  { name: 'Saul Goodman', age: 41},
  { name: 'Skinny P', age: 26},
  { name: 'Badger Mayhew', age: 24}
];

// for(let i = 0; 0 < characters.length; i++) { 
//   console.log(characters[i].age);
// };
