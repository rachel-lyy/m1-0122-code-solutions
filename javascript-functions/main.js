function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
convertMinutesToSeconds(5);
console.log('The value of convertMinutesToSeconds(5): ' + convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
greet('Beavis');
console.log('The value of greet(Beavis): ' + greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
getArea(17, 42);
console.log('The value of getArea(17, 42): ' + getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log("The value of getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }): " + getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The value of getLastElement(array): ' + getLastElement(['propane', 'and', 'propane', 'accessories']));
