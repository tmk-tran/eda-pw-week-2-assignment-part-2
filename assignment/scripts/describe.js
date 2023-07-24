// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// 
// Create a variable called 'name' and set it to 'Dane'. 
// Check if the name is 'Mary'. It is not, so the console.log would read:
// 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// 
// Declared a variable 'secret' without initializing it, so it has a value of 'undefined'.
//
// Created another variable 'code' and set it to '123'.
//
// Check if the code is equal to '123'. If it is, then the variable 'secret' will be assigned the string 'super', and the code will be '246' (123 times 2).
//
// If the code is greater than '250', then the variable 'secret' would be assigned the string 'duper'.
//
// console.log would read: 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// 
// Created a Boolean variable for 'isStudent'. Set it to true.
// Declared a variable 'age' and set it to 34.
// Created another variable 'zip' with a setting of 55407.
//
// Check if 'isStudent' is true with a compound conditional statement AND if the 'zip' is greater than 80000. 
//    If both of these are true, then the console.log would read 'You're a student on the West Coast!'
// If the first condition is not met, then this else if statement is executed. It checks two conditions: if 'isStudent' is false, and if 'age' is less than 30.
//    If either of these are true, then it would log 'What are your hobbies?' to the console.
// If the previous condition is not met, then the next else if statement would be evaluated. It checks if 'isStudent' is true. 
//    If 'isStudent' is true, then 'Welcome to Prime!' would be logged to the console.
// If none of the previous conditions were met, then this else block would be executed. It will log the message 'How about the weather?' to the console. 
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - colorOne = 'blue'; instructions list colorOne as 'blue'.
let colorOne = 'red';

// FIX - colorTwo = 'red'; instructions list colorTwo as 'red'.
let colorTwo = 'blue';

let mix = true;

if (mix === true) {

  //FIX - colorOne + colorTwo = 'purple'; 
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;

// FIX - time changes, so this shouldn't be listed as a constant. 
// let time = 4;
const time = 4;

//FIX - this is an 'OR' compound conditional, should use '&&' instead.
// if ( temp > 39 && time >= 4 ) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the instructions ask to check if age is greater than or equal to minAge, and it is.
// Rewrite as:
// if( age >= minAge ) {
//  console.log('enter');

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

