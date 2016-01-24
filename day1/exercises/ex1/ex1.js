(function(global){
A();

function C() {
	console.log("OOPS!");
}
//Logs oops
function E(f) {
	console.log("E");
	f();
	var f = F;
}
//Logs E Calls F
function A() {
	console.log("A");
	B();
};
// Logs A calls B
var C;

function G() {
	console.log("G");
	H();

	function H() {
		console.log("H");
		I();
	};
}
//Logs G Calls H, Logs H calls I
var D = d;

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
	J();
}

function B() {
	console.log("B");
	C();
};

var F = function() {
	console.log("F");
	G();
};

var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
			}
		};
	})(i);
}

var J = function() {
	J = function() {
		console.log("J");
		K();
	};
};

function C() {
	console.log("C");
	D();
};
})();
