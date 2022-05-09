let sayHi = function() {
  console.log('Hello World');
}
// sayHi();

let myFunc = sayHi;

// myFunc();

// Callback Functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert('You agree.');
}
function showCancel() {
  alert('You canceled the execution.');
}

// ask("Do you agree", showOk, showCancel);

// Shorter callback example
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// ask(
//   "Do you agree ?",
//   function() { alert('You agree.');},
//   function() { alert("You canceled the execution.");}
// );

// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression
let sum = function(a, b) {
  return a + b;
};