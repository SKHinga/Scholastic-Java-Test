function myButton() {
  var score = 0
  var correctAns1 = document.questions.qn1.value;
  var correctAns2 = document.questions.qn2.value;
  var correctAns3 = document.questions.qn3.value;
  var correctAns4 = document.questions.qn4.value;
  var correctAns5 = document.questions.qn5.value;
  var correctAns6 = document.questions.qn6.value;
  var results = document.getElementById("text")
  if (correctAns1=="commentone"){score+=10};
  if (correctAns2=="String"){score+=10};
  if (correctAns3=="int x = 5;"){score+=10};
  if (correctAns4=="float x = 2.8f;"){score+=10};
  if (correctAns5=="length()"){score+=10};
  if (correctAns6=="toUpperCase()"){score+=10};
  document.write(score); {
    alert("Well done for submiting click ok to view your score!")
  }
}
