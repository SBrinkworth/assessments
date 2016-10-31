// #1  ###################
// # Scope
// Given the following function
// ```
// function grandpa(){
//     var playball = "homerun";

//     function dad(){
//         var playball = "touchdown";

//         function son(){
//             var playnintendo = "Mario";
//         }
//     }

//     function uncle(){
//         var badjoke = "Har";

//         function cousin(){

//         }
//     }
// }
// ```

// Remove entries from the array until only correct answers remain

// Which function(s) access the playball variable and get homerun (Delete wrong answers, leave correct ones)
var scopeArray1 = ["grandpa", "uncle", "cousin"];

// Which function(s) access the playball variable and get touchdown (Delete wrong answers, leave correct ones)
var scopeArray2 = ["dad", "son"];

// Which function(s) access the badjoke variable and get undefined (Delete wrong answers, leave correct ones)
var scopeArray3 = ["grandpa", "dad", "son", ];

// Which functions accesss the badjoke variable and get "Har" (Delete wrong answers, leave correct ones)
var scopeArray4 = ["uncle", "cousin"];

// Which functions access the playnintendo variable and get Mario (Delete wrong answers, leave correct ones)
var scopeArray5 = ["son"];


// #2  ###################
// # Promises
var foo;
/* Write a function called async.
  Use $q to create a promise object and return the promise.
  Call setTimeout on a function
  which changes the variable foo (above) to 'bar'
  And resolve the promise when setTimeout completes.
*/
function async() {
	var defer = $q.defer();

	setTimeout(function() {
		foo = 'bar';
		defer.resolve(foo);
	}, 100);

	return defer.promise;
}


// #3  ###################
// # Context 1
// Write a function called context1 that takes in 4 parameters: A function called myFn, an object called context, param1, and param2.
// Invoke myFn explicitly setting the context to the object called context.  Pass in param1 and param2 in order as well.
function context1(myFn, context, param1, param2) {
	return myFn.call(context, param1, param2);
}



// #4  ###################
// # Context 2
// Write a function called context2 that takes in 3 parameters: A function called myFn, an object called context, and an array called params
// Invoke myFn explicitly setting the context to the object called context.  Pass in params
function context2(myFn, context, params) {
	return myFn.apply(context, params);
}



// #5  ###################
// # Context 3
// Write a function called context3 that takes in 2 parameters: A function called myFn, and an object called context
// Make sure the function is permanently linked to the context.  This should give you a new function, return it.
function context3(myFn, context) {
	return myFn.bind(context);
}



// #6  ###################
// # Constructor Function
// Make a constructor function called taco that takes in 3 parameters: shell, meat, veggies and assigns them to identically named properties.
var Taco = function(shell, meat, veggies) {
	this.shell = shell;
	this.meat = meat;
	this.veggies = veggies;
};



// #7  ###################
// # Implicit binding
// Make a constructor function called burrito.  It has a property called percentLeft = 100.  It has a property called eat that is a function.  When eat is invoked it uses context to implicitly subract 25 from the percentLeft on the burrito.
var Burrito = function() {
	this.percentLeft = 100;
	this.eat = function() {
		this.percentLeft -= 25;
	};
};


// #8  ###################
// # Prototype 1
// Add prototype function to the array type that doubles the value of every item in the array
// Array.prototype
Array.prototype.doubler = function() {
	for (var i = 0; i < this.length; i++) {
		this[i] = this[i] * 2;
	}

	return this;
};


// #9  ###################
// # Prototype 2
// Write a constructor function called chimichanga.  It has a property called percentLeft = 100.  It has a prototype function called eat.  When eat is invoked it uses context to implicitly subract 20 from the precentLeft on the chimichanga.
var Chimichanga = function() {
	this.percentLeft = 100;
};

Chimichanga.prototype.eat = function() {
	this.percentLeft -= 20;
};



// #10  ###################
// # Closure 1
// Write a function called sentence machine.  It takes in a parameter called partOne.  It returns a function called sentenceSmasher.
// When sentenceSmasher is invoked it should take in a parameter called partTwo and return a new string that adds partOne and partTwo together.
function sentenceMachine(partOne) {
	return function(partTwo) {
		return partOne + partTwo;
	};
}


// #11  ###################
// # Closure 2
// Write a function called subway.  It takes in one parameter called personName.
// It needs to keep track of what ingredients the person wants on their sandwhich.
// It needs to do this by returning a function called addIngredient.
// When addIngredient is invoked it saves that ingredient with previously added ingredients and then returns an object that looks like this (Replace the parts wrapped in <> with correct data):
// ```
// {
//     orderPerson: <Person name goes here>,
//     ingredients: <Array of ingredients goes here>
// }
// ```
function subway(personName) {
	var order = {
		orderPerson: personName,
		ingredients: []
	};

	return function(ingredient) {
		order.ingredients.push(ingredient);

		return order;
	};
}


// #12  ###################
// # Type checking
// Write a function that takes in 2 parameters.
// If both parameters are the same type an the same value return "Exact match".
// If both parameters have the same value but are different types return "Different types"
// Otherwise return "Different values"
function compareValues(param1, param2) {
	if (typeof param1 == typeof param2 && param1 == param2) {
		return 'Exact match';
	} else if (param1 == param2) {
		return "Different types";
	} else {
		return 'Different values';
	}
}
