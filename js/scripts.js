
function saySomething(whatToSay) {
  // user interface logic
  window.alert(whatToSay);
}
// business logic
function add(number1, number2) {
  return number1 + number2;
}

const result = add(3, 5);
const outputText = "The sum is " + result + ".";    // this line is new
saySomething(outputText);    
// this line is new

// user interface logic 
const number1 =prompt("Enter a number:");
const number2 = prompt("Enter another number:");

window.alert(add(number1, number2));

