/* exported getWords */
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else {
    var splitIt = string.split(' ');
    return splitIt;
  }
}
