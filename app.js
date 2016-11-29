'use strict';


// The questions in the guessing game must require a mix of yes/no answers, 
// and user input must accept either y/n or yes/no responses, with either 
// .toUpperCase() or .toLowerCase() used to validate the user 
// input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var question1 = prompt('Does Sam have any cats?').toLowerCase();


// if(condition is true) {
// 	do something;
// 	maybe do something more;
// 	etc. until done;
// } else {
// 	do this other thing;
// 	and maybe yet another thing;
// }

if(question1 === 'yes' || question1 === 'y') {
	alert('Yes, Sam does have three cats!');
} else if(question === 'no' || question1 === 'n') {
	alert('Sorry, you\'re wrong, Sam has three cats');
} else {
	alert('Try to answer with a yes/y or no/n next time.');
}







