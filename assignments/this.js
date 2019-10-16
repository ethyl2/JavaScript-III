/* The for principles of "this";
* in your own words. explain the four principles 
 for the "this" keyword below.
*
* 1. If something is in the global scope, the value of "this" is
the window/console object.
* 2. When a method is called with the format <myObject>.<myMethod>, 
"this" refers to myObject. This is implicit binding.
* 3. When an instance of an object is created by a constructor method,
"this" refers to that instance. const <myInstance> = new <myObject>(<myInstanceAttributes>);
* 4. Explicit binding is when .bind(), .call(), or .apply()
is used, and in those cases, this refers to the object argument. <myObject><myMethodOfMyObject>.call(<my2ndObject>);
"this" refers to <my2ndObject>.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const mySnake = {
    name: "Stripe",
    hobby: "escaping",
    describe: function() { 
        return `${this.name} loves ${this.hobby}!`
    },
}
console.log(mySnake.describe());

// Principle 3

// code example for New Binding
function Gerbil(hisName, hisColor) {
    this.name = hisName;
    this.color = hisColor;
    this.describe = function() {
        return `${this.name} is furry and ${this.color}.`;
    }
}
let gaspar = new Gerbil("Gaspar", "white and gray");
console.log(gaspar.describe());

// Principle 4

// code example for Explicit Binding
let angelo = new Gerbil("Angelo", "gray and brown");
console.log(angelo.describe.call(gaspar));