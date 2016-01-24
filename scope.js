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
//Good Example of Let. Not used in ES6
	function foo(bar){
		let (baz = bar){
			console.log(baz);
		}
		console.log(baz);
	} 
	foo('bar');
//Let tool http://github.com/getify/let-er































