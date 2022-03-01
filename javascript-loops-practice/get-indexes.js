/* exported getIndexes */
function getIndexes(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    var results = array.indexOf(array[i]);
    newArray.push(results);
  }
  return newArray;
}

getIndexes();
