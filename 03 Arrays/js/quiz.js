var answer;
var correct = '<h2>The CORRECT answers are:</h2>';
var incorrect = '<h2>The INCORRECT answers are:</h2>';
var quiz = [
  ['What year was created JavaScript?  ', '1995'],
  ['What CSS means?  ', 'cascading style sheets'],
  ['Which is the largest decimal number you can represent with 8 bits?  ', '255']
];


function print(message) {
  document.write(message);
}

alert('Today, You will answer questions about programing, you can write "quit" to exit');
for ( var i = 0; i < quiz.length; i++ ) {

  var question = quiz[i][0];
  var correctAnswer = quiz[i][1];
  answer = prompt(question);
  
  if (answer === 'quit') {
    break;
  }
  else if ( answer === correctAnswer.toLowerCase() ) {
    correct += '<p>' + question + answer + '</p>';
  }
  else {
    incorrect += '<p>' + question + correctAnswer + '</p><p> Your answer: ' + answer +'</p>';
  }
}
print( correct + incorrect );