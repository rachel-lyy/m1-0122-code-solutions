/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (const i in object) {
    array.push(i);
  }
  return array;
}
