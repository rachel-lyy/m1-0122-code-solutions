/* exported setValue */
function setValue(object, key, value) {
  var thisValue = object[key] = value;
  return thisValue;
}
setValue();
