var message = '';
var student;
var answer;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function printDataStudent(student, var1, var2) {
  var html = '<h2>Student: ' + student.name + '</h2>';
  html += '<p>Track: ' + student.track + '</p>';
  html += '<p>Points: ' + student.points + '</p>';
  html += '<p>Achievements: ' + student.achievements + '</p>';
  return html;
}

while ( true ) {
  answer = prompt('To see the data please write the name of student (example: "Dave"). To exit you have to write "quit"');
  if ( answer === null || answer.toLowerCase() === 'quit' ) {
      break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    
    if ( answer === student.name ) {
      
        message = printDataStudent (student);
        print(message);
        break;
    }  
  }
}