// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback

  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


function consume(item1, item2, cb) {
  return cb(item1, item2);
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(number1, number2) {
  return number1 + number2;
}
function multiply(number3, number4) {
  return number3 * number4;
}
function greeting (first, last) {
  return `Hello ${first} ${last}, nice to meet you!` //took forever to figure this out lol!
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */

//missing the console.log....

console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting));  // Hello Mary Poppins, nice to meet you!



// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Due to closure it can access variables outside of its function, but not deeper inside of it. It can reach out, but not be able to call a variable inside of itself.


const external = "I'm outside the function";  //global

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();