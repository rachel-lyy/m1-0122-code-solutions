/* exported isVowel */
function isVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }

  return false;

}
