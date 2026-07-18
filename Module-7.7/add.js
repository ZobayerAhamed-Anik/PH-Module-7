let orangePrice = 20;
orangePrice = '20';
let mangoPrice = 30;
let totalPrice = orangePrice + mangoPrice;
console.log(orangePrice);
console.log(mangoPrice);
console.log(totalPrice); 
// If a string and a number is added the result is auto converted to a string.---
// e.g. '20' + 30 = 2030 

// console.log(typeof orangePrice);
// console.log(typeof mangoPrice);
// console.log(typeof totalPrice);

// If two strings is added, They just prints one after
const firstName = "Ananta ";
const lastName = "Jalil";
const fullName = firstName + lastName;
console.log(fullName);

// Converting String->number(int)...

// const myNumber1 = '50';
// const myNumber2 = 70;
// const myTotal = myNumber1 + myNumber2;
// console.log(myTotal);
//output: 5070;

// Using parseInt : The string will be converted to a integer number...
const myNumber1 = '50.6';
const myIntNum1 = parseInt(myNumber1);
const myNumber2 = 70;
const myTotal = myIntNum1 + myNumber2;
console.log(myTotal);

// Using parseFloat : The string will be converted to a Floating point number...
const myFloatNum1 = parseFloat(myNumber1);
console.log(myFloatNum1);
const myFloatTotal = myFloatNum1 + myNumber2;
console.log(myFloatTotal);

// NaN : If the String doesn't contain any number in first appearance then it returns....
const myName = 'Zobayer';
console.log(parseFloat(myName));

// Adding Two floating numbers:
const firstNumber = 0.1;
const secondNumber = 0.2;
const totalNumber = firstNumber + secondNumber;
// console.log(totalNumber);   // It returns, 0.30000000000000004 
// To solve this problem...
const totalTwoDecimal = totalNumber.toFixed(2);
console.log(totalNumber);
console.log(totalTwoDecimal); // But it becomes a string...
console.log(parseFloat(totalTwoDecimal)); // solved...







