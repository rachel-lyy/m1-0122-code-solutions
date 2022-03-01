/* exported tail */
// define a new function tail with one parameter array
// create a new varible newArray and assign it to an empty array
// in the function create a for loop starting at the index of 1, iterate 1x until the length of the array
// in the loop, push the values into the newArray array
// return newArray outside of the for loop

function tail(array) {
  var newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
