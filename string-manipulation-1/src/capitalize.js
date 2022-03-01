/* exported capitalize */
function capitalize(word) {
  var string = word.toLowerCase();
  return word.charAt(0).toUpperCase() + string.slice(1);
}
