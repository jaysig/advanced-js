//Every single object is built by a constructor function

//Constructor - Found on the constructor object not the child itself. Have to go up the prototype chain to get it

//Ways to get prototype
 /* 
	1. __proto__
	2. Object.getPrototypetypeOf(a1);
	3. object.consturctor.prototype
 */

 //object linkage 
 Object.create(Foo.prototype);

 //[[Prototype]] allows for delegation up the prototypial change

 //Make sure to remember that prototypial inheritance is not the same as classes

 //Classical Inheritance 
 	//Class is the blueprint 

 //Prototypal  Inheritance
 	// need the Bar.prototype

 //JS has behavior delegation 

 