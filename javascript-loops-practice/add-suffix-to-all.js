/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  for (let i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    array.push(newWord);
  }
  return array;
}
addSuffixToAll();
