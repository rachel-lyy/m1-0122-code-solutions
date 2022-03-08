/* exported toObject */
function toObject(keyValuePair) {
  var newObj = Object.create({});
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  newObj[key] = value;
  return newObj;
}
