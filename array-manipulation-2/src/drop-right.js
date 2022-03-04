/* exported dropRight */
function dropRight(array, count) {
  var items = array.slice(array, array.length - count);
  return items;
}
