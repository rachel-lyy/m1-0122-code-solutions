/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      array.push(values[i]);
    }
  }
  return array;
}
filterOutNulls();
