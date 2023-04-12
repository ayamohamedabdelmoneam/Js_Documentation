## What An Operators Acually Mean ?

- operators allow us to transform values or combine multiple values.
- really do all kind of work with values.
- there are many types of operators like:
  - Mathematical operators or arithematic operators.
  - logical operators.
  - assignment operators.
  - comparison operators.

## We Can Log Different values At The Same Time In The Same Console.log

## 1- Mathematical Operators:

- Plus (+)
- minus (-)
- Multiplication (\*)
- Power (\*\*)
- Devision (/)
- Modules Or Reminder (%)

```js
// Simple Use Case To Calculate The Age
const now = 2023;
const ageAya = now - 2000;
const ageMamy = now - 1983;
console.log(ageAya, ageMamy); // 23 40

// You can Make arithematic operation on Variable like This
console.log(ageAya * 2); // 46
console.log(ageAya / 2); // 11.5
console.log(ageAya + 2); // 25
console.log(ageAya % 2); // 1

// you Can Use Plus Operator To Concatenate  To String Like This
const firstName = "aya";
const lastName = "osama";
console.log(firstName + lastName); // ayaosama without any spaces
// if You Want To Make Spaces
console.log(firstName + " " + lastName); //aya osama
```

<hr>
 
## 2- Assignment Operators:
- Is The Most strightforward assignment operator is equal sign (=)
- plus Equal (+=)
- Minus Equal (-=)
- (*=)
- (/=)
- (%=)

```js
let x = 10 + 5; // 15
console.log(x); // 15 Because The Plus Operator Execute Frist before The Operation Of assignment  That Return To operator Precedence
x += 10; // x = x + 10 = 25
console.log(x); // 25
x *= 4; // x = x *4 25 *4 = 100
console.log(x); //100
x++; // x = x +1 = 100 +1 = 101
console.log(x); // 101
x--; // x = x -1 = 101 - 1 =100
x--; // x = x - 1 = 100 -1 = 99
console.log(x); // 99
```

<hr>

## 3- Comparison Operators :

- use it to produce boolean values.
- greater Than (>)
- less Than (<)
- greater than or equal (>=)
- Less Than Or Equal (<=)

```js
const now = 2023;
const ageAya = now - 2000;
const ageMamy = now - 1983;
console.log(ageMamy > ageAya); // True
console.log(ageAya >= 23); // True
console.log(ageMamy <= 23); // False
```

## The Precedence Of Operators:

## Build string And using Template literals:

- you can Use Template Literals To write multiline string.
- before it we need to use \n to start new line in which many programming language.

```js
// Simple program To Build A String
// I'm Aya, a 23 Years Old Front-End developer !
const firstName = "Aya";
const job = "Front_End developer";
const birthYear = 2000;
const year = 2023;

const aya =
  "I'm" + " " + firstName + ", a" + (year - birthYear) + "Year Old" + job + "!";
console.log(aya);

const newAya = `I'm ${firstName}, a ${year - birthYear} Years Old ${job}!`;
console.log(newAya);
```
