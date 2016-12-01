'use strict';

var username = prompt('Hello! What is your name?');
alert('Lets play a guessing game');
alert('Please answer yes/y or no/n to the following questions');
//q1 start
	function questionOne() {
	var response1 = prompt('Does Jennifer believe in magic?').toLowerCase();
	var numberOfCorrectAnswers = 0;
	if(response1 === 'yes' || response1 === 'y') {
	  alert('Yes, Jennifer does believe in magic!');
	  numberOfCorrectAnswers += 1;
	} else if(response1 === 'no' || response1 === 'n') {
	  alert('Sorry, you\'re wrong, Jennifer does believe in magic.');
	} else {
	  alert('Try to answer with a yes/y or no/n next time.');
	}
	}
	questionOne();
//q1 end
function questionTwo() {
console.log('Correct answer: yes/y. Does Jennifer believe in magic? User answered: '+ response1);
document.write('You answered: ' + response1 + ' to question #1 <br>');
var response2 = prompt('Is Jennifer the youngest in her family?').toLowerCase();
//q2 start
if(response2 === 'yes' || response2 === 'y') {
  alert('Yes, you\'re correct, Jennifer is the youngest of four children!');
  numberOfCorrectAnswers += 1;
} else if(response2 === 'no' || response2 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer is the youngest of four children.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
questionTwo();
//q2 end
console.log('Correct answer: yes/y. Is Jennifer the youngest in her family? User answered: ' + response2);
document.write('You answered: ' + response2 + ' to question #2 <br>');


var response3 = prompt('Does Jennifer know how to swim?').toLowerCase();
//q3 start
if(response3 === 'yes' || response3 === 'y') {
  alert('Yes, Jennifer is an excellent swimmer!');
  numberOfCorrectAnswers += 1;
} else if(response3 === 'no' || response3 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer swims very well.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
//q3 end
console.log('Correct answer: yes/y. Does Jennifer know how to swim? User answered: ' + response3);
document.write('You answered: ' + response3 + ' to question #3 <br>');

var response4 = prompt('Has Jennifer ever been to Alaska?').toLowerCase();
//q4 start
if(response4 === 'yes' || response4 === 'y') {
  alert('That is incorrect! Jennifer has never been to Alaska');
} else if(response4 === 'no' || response4 === 'n') {
  alert('You\'re correct! Jennifer doesn\'t like the cold weather.');
  numberOfCorrectAnswers += 1;
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
//q4 end
console.log('Correct answer: no. Has Jennifer ever been to Alaska? User answered: ' + response4);
document.write('You answered: ' + response4 + ' to question #4 <br>');

var response5 = prompt('Can Jennifer speak Mandarine?').toLowerCase();
//q5 start
if(response5 === 'yes' || response5 === 'y') {
  alert('You\'re incorrect. Jennifer does not speak Mandarine');
} else if(response5 === 'no' || response5 === 'n') {
  alert('Correct! Jennifer only speaks English and Vietnamese');
  numberOfCorrectAnswers += 1;
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
//q5 end
console.log('Correct answer:no/n. Can Jennifer speak Mandarine? User answered: ' + response5);
document.write('You answered: ' + response5 + ' to question #5 <br>');
alert('The following question requires a numerical value');
//q6 start
var counter = 0;
while(counter <= 3) {
  var response6 = prompt('What is my shoe size?');
  if(response6 > 6) {
    alert(response6 + ' is too high');
    response6 = parseInt(prompt('Guess again. What is Jennifer\'s shoe size?'));
  }else if(response6 < 6) {
    alert(response6 + ' is too low');
    response6 = parseInt(prompt('Guess again. What is Jennifer\'s shoe size?'));
  }else{
    alert('Bingo! I do wear a size 6');
    numberOfCorrectAnswers += 1;
    break;
  }
  counter += 1;
}
//q6 end
console.log(' Correct answer is: 6. What is Jennifer\'s shoe size?' + ' user answered: ' + response6);
alert('The following question requires a word input');
var favoriteFruits = ['banana', 'apple', 'grapes', 'watermelon', 'kiwi'];
var numberOfTries = 0;
var result = false;
while (numberOfTries <= 6) {
  var response7 = prompt('What is Jennifer\'s favorite fruit?');
  for(var i = 0; i < favoriteFruits.length; i++) {
    if(response7 === favoriteFruits[i]) {
      result = true;
      numberOfCorrectAnswers++;
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
