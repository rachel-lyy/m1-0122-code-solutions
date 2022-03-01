/* exported compact */
function compact(array, ommitVal) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  } return newArray;
}
