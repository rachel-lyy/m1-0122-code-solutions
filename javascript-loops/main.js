/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  console.log('currentNumber array: ', numbers);
}
getNumbersToTen();

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  console.log('getEvenNumbersToTwenty array: ', evenNumbers);
}
getEvenNumbersToTwenty();

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    count++;
    repeated += word;
  }
  console.log('repeatWord("this", 3): ', repeated);
}
repeatWord('this', 3);

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('independent');

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  console.log(doubled);
}
doubleAll([10, 14, 18, 11]);

function getKeys(object) {
  var keys = [];
  for (const i in object) {
    keys.push(i);
  }
  console.log("getKeys - {title: 'Harry Potter and Goblet of Fire', author: 'JK Rowling', price: 9.99 }: ", keys);
}
getKeys({ title: 'Harry Potter and Goblet of Fire', author: 'JK Rowling', price: 9.99 });

function getValues(object) {
  var values = [];
  for (const i in object) {
    values.push(object[i]);
  }
  console.log("getValues - {title: 'Harry Potter and Goblet of Fire', author: 'JK Rowling', price: 9.99 }: ", values);
}
getValues({ title: 'Harry Potter and Goblet of Fire', author: 'JK Rowling', price: 9.99 });
