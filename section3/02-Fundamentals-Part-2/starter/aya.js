'use strict';
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can Drive :D `);
function logger () {
    // body of function 
    console.log(`My Name Is Aya`)
}
// calling running or invoking function 
// you can run this function as many times
logger();
logger();
logger();

 function foodProcessor(apples, oranges) {
    console.log(apples, oranges); // 5, 0
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
 }
 const appleJuice = foodProcessor(5, 0);
  const appleorangejuice = foodProcessor(3, 5);
  console.log(appleorangejuice);
  console.log(appleJuice);
  console.log(foodProcessor(2,6));

  const num = Number('23');  // built in function 
  console.log(num); // 23 as number

  // Arrow functions
// if you hve one parameter and one line of code

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46
// if you have more than one parameter and multiple line of code
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear; // to get your age
  const retirement = 65 - age; // to get years of retirement
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
// Invoking function 
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
// Function calc average
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(5, 4, 6));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphins, scoreKoalas);


  // Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
