var colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]: ' + colors[0]);
console.log('Value of colors[1]: ' + colors[1]);
console.log('Value of colors[2]: ' + colors[2]);

var americaIs = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(americaIs);

colors[2] = 'green';
americaIs = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(americaIs);

console.log(colors);

var students = [' Jon', 'Susan', 'Alec', 'Maggie'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student is ' + lastStudent);
console.log(students);
