'use strict';


// The questions in the guessing game must require a mix of yes/no answers, 
// and user input must accept either y/n or yes/no responses, with either 
// .toUpperCase() or .toLowerCase() used to validate the user 
// input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('Does Sam have any cats?').toLowerCase();
var response2 = prompt('');
var response3 = prompt('');
var response4 = prompt('');
var response5 = prompt('');

// if(condition is true) {
// 	do something;
// 	maybe do something more;
// 	etc. until done;
// } else {
// 	do this other thing;
// 	and maybe yet another thing;
// }

if(response1 === 'yes' || response1 === 'y') {
	alert('Yes, Sam does have three cats!');
} else if(response === 'no' || response1 === 'n') {
	alert('Sorry, you\'re wrong, Sam has three cats');
} else {
	alert('Try to answer with a yes/y or no/n next time.');
}







