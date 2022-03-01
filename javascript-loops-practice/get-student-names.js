/* exported getStudentNames */
function getStudentNames(students) {
  var array = [];
  for (let i = 0; i < students.length; i++) {
    var theName = students[i].name;
    array.push(theName);
  } return array;
}
getStudentNames();
