//Closure - function remembers lexical scope even when excuted outside of it
	function foo(){
		var bar = "bar";
		return function(){
			console.log(bar);
		};
	}
	function bam(){
		foo()();
	}
	bam();
//Let i binds i in each loop

//Module Pattern
	//Must be an outer wrapping function
	//One or more functions return

var foo = (function(){
	var o = { bar: "bar"};
	return {
		bar: function(){
			console.log(o.bar);
		}
	};
})();
foo.bar(); //bar 

// Modern module
define("foo", function(){
	var o = {bar: "bar"};

	return {
		bar: function(){
			console.log(o.bar);
		}
	};
});
//Es6
var o = { bar: "bar"};
export function bar(){
	return o.bar;
}

import bar from "foo" //just add bar
module foo from "foo"; // add all of the module

//Quiz 
 //Closure function remembers lexical scope
 // Scope stays around as long as there is a closure 
 // Need to use let to create i on each iteration

 //Gotchas
 /* 
Just having a function inside a for loop that calls I will just return the value where I breaks the loop
 */