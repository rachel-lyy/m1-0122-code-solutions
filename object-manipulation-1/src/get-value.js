// /* exported getValue */
function getValues(object) {
  var array = [];
  for (const i in object) {
    array.push(object[i]);
  }
  return array;
}
getValues();
