var books = [
  {
    isbn: 'B07D23CFGR',
    title: 'Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones',
    author: 'James Clear'
  },
  {
    isbn: 'B0192CTMYG',
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling'
  },
  {
    isbn: 'B000QCS8TW',
    'title:': 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
    author: 'George R. R. Martin'
  }
];

console.log('Books Array typeof:', typeof books);
console.log('JSON.stringify typeof:', typeof JSON.stringify(books));

var student = '{"numberId": "23", "name": "Rachel"}';
console.log('student typeof:', typeof student);

var value = JSON.parse(student);
console.log('JSON.stringify student typeof:', typeof value);
