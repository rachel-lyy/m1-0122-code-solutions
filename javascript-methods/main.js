// Math Object
var element1 = 1;
var element2 = 5;
var element3 = 8;
var maximumValue = Math.max(element1, element2, element3);
console.log('maximumValue: ' + maximumValue);
var heroes = ['Thor', 'Superman', 'Dr. Strange', 'Shang Chi'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ' + randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ' + randomHero);

// Array Methods
var library = [
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'JK Rowling'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('New library value: ', library);

// String Methods
var fullName = 'Rachel Ly';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ' + sayMyName);
