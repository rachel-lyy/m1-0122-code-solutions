/* exported takeRight */
function takeRight(array, count) {
  if (array.length > count) {
    var items = array.slice(array.length - count);
    return items;
  } else {
    return array;
  }
}
