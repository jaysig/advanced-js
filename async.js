/*Async Patterns
	Callbacks
	Generators
	Promises
*/
/* Callbacks
	Callbacks sucks when there are multiple things needing to fire at once
	Callback Hell: 
	Inversion of Control: Handling over control of program to an API or something outside the program
	Seperate Callbacks: Success and failure callbacks - Does not fix it
	Error First: If, Else - Does not fix it


*/


/*  Generators(yield)
	Calls itself in the middle of a function
	Generator creates an iterator 
		Runs until the next yield statement or the end
	Hide asynchrous in synchrous 

*/
function* gen(){
	console.log("hello");
	yield null;
	console.log("World");
}

var it = gen();
it.next(); //prints "hello"
it.next(); //prints "World"

/*  Promise - "continuation events"
	Jquery style - have deferred functions
	Native - new Promise 

*/

/* Async Patterns 
 Sequence = auto chained promises
Assumes you want to go on 
 Gate - Wait for multiple things to finish before moving on
*/
