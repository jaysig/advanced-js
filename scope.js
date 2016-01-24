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
	