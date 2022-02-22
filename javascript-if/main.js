/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// var shia = {
//   name: 'Shia Lebouf',
//   age: 34
// };

function isUnderFive(number) {
  if (number < 5) {
    return 'true';
  } else {
    return 'false';
  }
}

// console.log('isUnderFive(3): ' + isUnderFive(3));

function isEven(number) {
  if (number % 2) {
    return 'false';
  } else {
    return 'true';
  }
}

// console.log('isEven(44): ' + isEven(44));

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return 'true';
  } else {
    return 'false';
  }
}

// console.log('startsWithJ("JSON"): ' + startsWithJ('JSON'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return 'true';
  } else {
    return 'false';
  }
}

// console.log('isOldEnoughToDrink(shia): ' + isOldEnoughToDrink(shia));

function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return 'true';
  } else {
    return 'false';
  }
}

// console.log('isOldEnoughToDrive(shia): ' + isOldEnoughToDrive(shia));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16) {
    return 'false';
  } else {
    return 'false';
  }
}

// console.log('isOldEnoughToDrinkAndDrive(shia): ' + isOldEnoughToDrinkAndDrive(shia));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'true';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

// console.log('categorizeAcidity(6): ' + categorizeAcidity(6));

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return 'We\'re the warner brothers';
  } else if (name === 'wakko') {
    return 'We\'re the warner brothers';
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}

// console.log('introduceWarnerBro: ' + introduceWarnerBro('dot'));
