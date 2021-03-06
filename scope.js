//Where to look for things

//Undeclared - unable to find LHS (left hand side) references to a variable

//function declaration - function - first thing in the statement

//Function expression - var name = function 
	//Always want a named function expression ie var name = function nameHandler(){}
		//Helps with Debugging

//lexical scope - Going up elevator floors, keep looking at higher levels for a declaration 
	//cheated with eval - makes your code slower
	//with key - create's a new lexical scope

//IIFE
var foo = 'foo';

(function(){
	var foo ="foo2";
	console.log(foo); //foo2
})();

console.log(foo);// foo
//Protects global namespace
	//Remember to name to protect global namespace

//Let - ES6 Assign to the lexical scope  (let i =0) in a for loops. Will only give access in a for loop for example
	// have to be at top of a block
	//Review in the future
//Good Example of Let. Not used in ES6
	function foo(bar){
		let (baz = bar){
			console.log(baz);
		}
		console.log(baz);
	} 
	foo('bar');
//Let tool http://github.com/getify/let-er

//dynamic  - //runtime decision - Would look in the stack for declaration not step up different levels


//Quiz
/* 
Cheating Lexical Scope - with and eval
Ways to create new scope - function, catch blocks, curly blocks with let keyword
Difference between undeclared and undefined - undefined is a value, undeclared has not been registered

*/


//mutual recursion - functions that call each other 

//This - current execution context
	//dependant on call site
	 /* 
		1 - New key word
		2 - explicit - clearly defined what this is referring too
			hard bind
			function foo(){console.log(this.bar);}
			var orig = foo
			foo = function(){ orig.call(obj);}
		3 - implicit - context object becomes this, has a containing object
		4 -  default - reference to the function. Undefined or Global value
	 */

//Call & Apply
/* 
	Call - comma seperate values
	Apply - add arugments as an array
*/

//New - modify the way the 
	/* 
	1. new object created
	2. Object linked to different object
	3. Bound this keyword
	4. If nothing is returned; insert a return this
	*/
//Key questions
 /* 
	1. Was the function called with the new keyword
	2. was it called with call or apply
	3. was it called within a containing object
	4. default - global object
 */

 





























