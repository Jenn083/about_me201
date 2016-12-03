'use strict';

var username = prompt('Hello! What is your name?');
alert('Lets play a guessing game');
alert('Please answer yes/y or no/n to the following questions');

var numberOfCorrectAnswers = 0;

function question1() {
  var response1 = prompt('Does Jennifer believe in magic?').toLowerCase();
  if(response1 === 'yes' || response1 === 'y') {
    alert('Yes, Jennifer does believe in magic!');
    numberOfCorrectAnswers += 1;
  } else if(response1 === 'no' || response1 === 'n') {
    alert('Sorry, you\'re wrong, Jennifer does believe in magic.');
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Correct answer: yes/y. Does Jennifer believe in magic? User answered: '+ response1);
  document.write('You answered: ' + response1 + ' to question #1 <br>');
} // end question1
question1();

function question2() {
  var response2 = prompt('Is Jennifer the youngest in her family?').toLowerCase();

  if(response2 === 'yes' || response2 === 'y') {
    alert('Yes, you\'re correct, Jennifer is the youngest of four children!');
    numberOfCorrectAnswers += 1;
  } else if(response2 === 'no' || response2 === 'n') {
    alert('Sorry, you\'re wrong, Jennifer is the youngest of four children.');
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Correct answer: yes/y. Is Jennifer the youngest in her family? User answered: ' + response2);
  document.write('You answered: ' + response2 + ' to question #2 <br>');
} // end question2
question2();

function question3() {
  var response3 = prompt('Does Jennifer know how to swim?').toLowerCase();

  if(response3 === 'yes' || response3 === 'y') {
    alert('Yes, Jennifer is an excellent swimmer!');
    numberOfCorrectAnswers += 1;
  } else if(response3 === 'no' || response3 === 'n') {
    alert('Sorry, you\'re wrong, Jennifer swims very well.');
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Correct answer: yes/y. Does Jennifer know how to swim? User answered: ' + response3);
  document.write('You answered: ' + response3 + ' to question #3 <br>');
} // end question3
question3();

function question4() {
  var response4 = prompt('Has Jennifer ever been to Alaska?').toLowerCase();

  if(response4 === 'yes' || response4 === 'y') {
    alert('That is incorrect! Jennifer has never been to Alaska');
  } else if(response4 === 'no' || response4 === 'n') {
    alert('You\'re correct! Jennifer doesn\'t like the cold weather.');
    numberOfCorrectAnswers += 1;
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Correct answer: no. Has Jennifer ever been to Alaska? User answered: ' + response4);
  document.write('You answered: ' + response4 + ' to question #4 <br>');
} // end question4
question4();

function question5() {
  var response5 = prompt('Can Jennifer speak Mandarine?').toLowerCase();

  if(response5 === 'yes' || response5 === 'y') {
    alert('You\'re incorrect. Jennifer does not speak Mandarine');
  } else if(response5 === 'no' || response5 === 'n') {
    alert('Correct! Jennifer only speaks English and Vietnamese');
    numberOfCorrectAnswers += 1;
  } else {
    alert('Try to answer with a yes/y or no/n next time.');
  }
  console.log('Correct answer:no/n. Can Jennifer speak Mandarine? User answered: ' + response5);
  document.write('You answered: ' + response5 + ' to question #5 <br>');
} // end question5
question5();

alert('The following question requires a number input');
var counter = 0;

function question6() {
  while(counter < 4) {
    var response6 = prompt('What favortie number?');
    if(response6 > 6) {
      alert(response6 + ' is too high');
      response6 = parseInt(prompt('Guess again. What is Jennifer\'s favorite number?'));
    }else if(response6 < 6) {
      alert(response6 + ' is too low');
      response6 = parseInt(prompt('Guess again. What is Jennifer\'s favorite number?'));
    }else{
      alert('Bingo! ' + response6 + ' is my favorite number.');
      numberOfCorrectAnswers += 1;
      break;
    }
    counter += 1;
  }
  console.log(' Correct answer is: 6. What is Jennifer\'s favorite number?' + ' user answered: ' + response6);
} // end question6

question6();

alert('The following question requires a word input');
function question7() {
  var favoriteFruits = ['banana', 'apple', 'grapes', 'watermelon', 'kiwi'];
  var numberOfTries = 0;
  var result = false;
  while (numberOfTries < 6) {
    var response7 = prompt('What is Jennifer\'s favorite fruit?');
    for(var i = 0; i < favoriteFruits.length; i++) {
      if(response7 === favoriteFruits[i]) {
        result = true;
        numberOfCorrectAnswers += 1;
        break;
      }
    }
    if(result === true) {
      alert('You got it!');
      break;
    }else{
      alert('Wrong answer!');
    }
    numberOfTries += 1;
  }
  console.log('Possible answers : [banana, apple, grapes, watermelon, kiwi]. What is Jennifer\'s favorite fruit?' + ' user answered: ' + response7);
  if (numberOfCorrectAnswers > 5) {
    alert(username + ', you have answered ' + numberOfCorrectAnswers + ' correct questions out of 7. Good Job!');
  }
  else{
    alert(username + ', you have answered ' + numberOfCorrectAnswers + ' correct questions out of 7. Better luck next time.');
  }
} // end question7
question7();
