'use strict';



var response1 = prompt('Does Jennifer believe in magic?').toLowerCase();

if(response1 === 'yes' || response1 === 'y') {
  alert('Yes, Jennifer does believe in magic!');
} else if(response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer does believe in magic.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Does Jennifer believe in magic? User answered: '+ response1);
document.write('You answered: ' + response1 + ' to question #1');
var response2 = prompt('Is Jennifer the youngest in her family?').toLowerCase();

if(response2 === 'yes' || response2 === 'y') {
  alert('Yes, you\'re correct, Jennifer is the youngest of four children!');
} else if(response2 === 'no' || response2 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer is the youngest of four children.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Is Jennifer the youngest in her family? User answered: ' + response2);
document.write('You answered: ' + response2 + ' to question #2');
var response3 = prompt('Does Jennifer know how to swim?').toLowerCase();

if(response3 === 'yes' || response3 === 'y') {
  alert('Yes, Jennifer is an excellent swimmer!');
} else if(response3 === 'no' || response3 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer swims very well.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Does Jennifer know how to swim? User answered: ' + response3);
document.write('You answered: ' + response3 + ' to question #3');

var response4 = prompt('Has Jennifer ever been to Alaska?').toLowerCase();

if(response4 === 'yes' || response4 === 'y') {
  alert('That is incorrect! Jennifer has never been to Alaska');
} else if(response4 === 'no' || response4 === 'n') {
  alert('You\'re correct! Jennifer doesn\'t like the cold weather.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Has Jennifer ever been to Alaska? User answered: ' + response4);
document.write('You answered: ' + response4 + ' to question #4');

var response5 = prompt('Can Jennifer speak Mandarine?').toLowerCase();

if(response5 === 'yes' || response5 === 'y') {
  alert('You\'re incorrect. Jennifer does not speak Mandarine');
} else if(response5 === 'no' || response5 === 'n') {
  alert('Correct! Jennifer only speaks English and Vietnamese');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Can Jennifer speak Mandarine? User answered: ' + response5);
document.write('You answered: ' + response5 + ' to question #5');
