var student = {
  firstName: 'Rachel',
  lastName: 'Ly',
  age: '27'
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ' + fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Email Marketer';
console.log('Value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('Value of student.previousOccupation: ' + student.previousOccupation);

var vehicle = {
  make: 'BMW',
  model: 'X3',
  year: 2022
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('Value of vehicle["color"]: ' + vehicle['color']);
console.log('Value of vehical["isConvertable"]: ' + vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Daisy',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('Value of pet:' + pet);
