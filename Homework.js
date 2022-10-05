/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* The main and most basic type of data in JavaScript are 3 and they include Strings, Numbers and Booleans.*/

//Strings are a type of data composed by a word made by letters that can also include numbers or be just a number however, in order for it to be considered a string, it needs to be incapsulated with double or single quotes at the beginning and at the end of the "word". Here are some examples of what a string is
//let stringExample = "this is a string";
//let stringExample2 = "as long as it's in between vertical commas it's a string";

//Numbers on the other hand are like the word itself suggests, numbers. They can be as "big" as you want and can even include as many decimal points as you need
//and can be used for all sorts of needs when using JavaScript, some basic needs could be something as simple as doing a simple mathematical calculation to something
//more complex such as calculating someone's salary at the end of the month based on his daily income. Here are some examples
//let number = 90;
//let number2 = 10.04;

//Finally, booleans can get pretty confusing, however the basic concept of them is that they only have 2 values, True or False. When we do create a boolean we are only
//specifying if it is true or false (nasically saying if one data is right or wrong). Here is an example of a boolean.
//let booleanEx = false;

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A Variable is a piece of data that can as the word suggests, change depending on scenario and "evolve" as more data gets added and you start using the variable to calculate
something or to reach a final objective of yours. A Variable is also not something that can work by itself (it can, but then it wourldn't be a "variable"),
its like a piece of a Puzzle that needs other pieces in order to get a complete pictyure.*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let Number12 = 12;
let Number20 = 20;

console.log(Number12 + Number20); // You can also just type in the console 12 + 20 or add another variable and add Number12 and Number20 and call it NumberSum and put it in the console.

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* I'll just use Number12 again */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

fullName = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log(12 - Number12);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

console.log("is their equality true or false?", name1 === name2);
if ((name2 = "john" === name1)) {
  console.log(true);
} else {
  console.log(false);
}

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let smallerTen = 9;

if ((smallerTen = 9)) {
  console.log("nine");
} else {
  console.log(false);
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
