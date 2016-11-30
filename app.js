'use strict';



var response1 = prompt('Does Jennifer believe in magic?').toLowerCase();
var response2 = prompt('Is Jennifer the youngest in her family?').toLowerCase();
var response3 = prompt('Does Jennifer know how to swim?').toLowerCase();
var response4 = prompt('Has Jennifer ever been to Alaska?').toLowerCase();
var response5 = prompt('Can Jennifer speak Mandarine?').toLowerCase();

if(response1 === 'yes' || response1 === 'y') {
  alert('Yes, Jennifer does believe in magic!');
} else if(response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer does believe in magic.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

if(response2 === 'yes' || response2 === 'y') {
  alert('Yes, you\'re correct, Jennifer is the youngest of four children!');
} else if(response2 === 'no' || response2 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer is the youngest of four children.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

if(response3 === 'yes' || response3 === 'y') {
  alert('Yes, Jennifer is an excellent swimmer!');
} else if(response3 === 'no' || response3 === 'n') {
  alert('Sorry, you\'re wrong, Jennifer swims very well.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

if(response4 === 'yes' || response4 === 'y') {
  alert('That is incorrect! Jennifer has never been to Alaska');
} else if(response4 === 'no' || response4 === 'n') {
  alert('You\'re correct! Jennifer doesn\'t like the cold weather.');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

if(response5 === 'yes' || response5 === 'y') {
  alert('You\'re incorrect. Jennifer does not speak Mandarine');
} else if(response5 === 'no' || response5 === 'n') {
  alert('Correct! Jennifer only speaks English and Vietnamese');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
