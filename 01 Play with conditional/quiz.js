var message = "Hello Ms. or Mr. competitor, ";
message += "today you will answer 5 questions!! \n";
message += "If you answer correctly you will win a medal \n";

alert (message);

message = "[ This is a proof ] \n \n";
message += 'Just press the "Y" key to say yes or the "N" key to say No \n \n';
message += "Do you like programming? \n";
var options = "- Yes [Y] \n";
options += "- No [N]";
message += options;

var answer = prompt(message).toUpperCase();

if ( answer !== 'Y' && answer!== 'N' ) {
  alert("Upps!! You have gotten a wrong, please refresh the webpage.");
  wrote();
}

var score = 0;
var number = 0;
message = "[ Question number " + (++number) + " of 5 ] \n \n";
message += "' || ' Is this a operator called Or? \n";
message += options;
message += "\n \nScore: " + score;

if ( prompt(message).toUpperCase() == 'Y' ) {
  score++;
}

message = "[ Question number " + (++number) + " of 5 ] \n \n";
message += "Can you put comments with  <!-- --> in JavaScript ?\n";
message += options;
message += "\n \nScore: " + score;

if ( !(prompt(message).toUpperCase() == 'Y') ) {
  score++;
}

message = "[ Question number " + (++number) + " of 5 ] \n \n";
message += "The sentence ' if () {} ' Is it a fuction to flowing control ?\n";
message += options;
message += "\n \nScore: " + score;

if ( prompt(message).toUpperCase() == 'Y' ) {
  score++;
}

message = "[ Question number " + (++number) + " of 5 ] \n \n";
message += "Is JavaScript case sensitive?\n";
message += options;
message += "\n \nScore: " + score;

if ( prompt(message).toUpperCase() == 'Y' ) {
  score++;
}

message = "[ Question number " + (++number) + " of 5 ] \n \n";
message += "To make a web page we only need a file .js \n";
message += options;
message += "\n \nScore: " + score;

if ( !(prompt(message).toUpperCase() == 'Y') ) {
  score++;
}

var result = 'Your score: ' + score + ' correct answers of 5. \n \n';

if ( score === 5 ) {
  message = "!Congratulations! You win a GOLD Medal  \\(^ u ^)/";
}
else if ( 3 <= score ) {
  message = "!Great! You win a SILVER Medal  \\(O u O)/";
}
else if ( 1 <= score ) {
  message = "!Great! You win a BRONZE Medal  \\(* - *)/";
}
else {
  message = 'Sorry, you need practice more.';
}
document.write('<h2>' + result + '</h2>');
document.write('<h2>' + message + '</h2>');