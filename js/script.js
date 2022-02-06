// Create a function to execute the submit button.
function myButton() {
  // Create a variable for initial scale to be 0 so that if one fails that will display.
  var score = 0
  // create variables to pick up the value of each question
  var correctAns1 = document.questions.qn1.value;
  var correctAns2 = document.questions.qn2.value;
  var correctAns3 = document.questions.qn3.value;
  var correctAns4 = document.questions.qn4.value;
  var correctAns5 = document.questions.qn5.value;
  var correctAns6 = document.questions.qn6.value;
  // the text div will store our score 
  var results = document.getElementById("text")
  // create if statements that gives the variables correct values to each question.
  if (correctAns1=="commentone"){score+=10};
  if (correctAns2=="String"){score+=10};
  if (correctAns3=="int x = 5;"){score+=10};
  if (correctAns4=="float x = 2.8f;"){score+=10};
  if (correctAns5=="length()"){score+=10};
  if (correctAns6=="toUpperCase()"){score+=10};
  // create an aleart that will inform the user they are submitting. Additionally a new document will display the score.
  // document.write(score); {
  // };
  qn.style.display="none";
  // create if statements to display our score.
  if (score==60) {
  alert("Well done for submiting click OK to view your score!");
  results.textContent= "Your score is 100%, you passed with flying colors!";
} else if (score==50) {
  alert("Well done for submiting click OK to view your score!");
  results.textContent= "Congratulations on your success! Your score is 84%.";
} else if (score==40) {
  alert("Well done for submiting click OK to view your score!");
  results.textContent= "A job well done Your score is an avarange of 67%!";
 } else if (score==30) {
  alert("Well done for submiting click OK to view your score!");
  results.textContent= "Your score is 50%, you have fairly passed!";
} else if (score<=20) {
  alert("Well done for submiting click OK to view your score!");
  results.textContent= "Your score is below average. Please retry the quiz for a better score!";
}
}
