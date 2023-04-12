## Remember, we're gonna use strict mode in all scripts now!

- Using Google, StackOverflow and MDN

# PROBLEM 1:

- We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

## 1) Understanding the problem

- What is temp amplitude? Answer: difference between highest and lowest temp
- How to compute max and min temperatures?
- What's a sensor error? And what do do?

## 2) Breaking up into sub-problems

- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it

```js
"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const cruTemp = temps[i];
    if (typeof cruTemp !== "number") continue;
    if (cruTemp > max) max = cruTemp;
    if (cruTemp < min) min = cruTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAmplitude([3, 7, 4, 11, 89, 12]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
```

<hr>

# PROBLEM 2:

- Function should now receive 2 arrays of temps

## 1) Understanding the problem

- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

## 2) Breaking up into sub-problems

- Merge 2 arrays

```js
"use strict";
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
```

<hr>

# Debugging with the Console and Breakpoints:

- which mean to find and fix error.

# What Is Software bug ?

- defect or problem in a computer problem .
- basically, any unexpected or unintended behaviour of a computer program
- the actual term bug was coined in the 1940.
- bugs are completely normal in software developement
- every complex application contains bugs

## Identity :

- becoming aware that there is a bug .
- during development.
- testing software.
- user reports during production
- context browsers, users

## Find:

- isolating where excatly the bug is happening in code.
- we can do that with developer console for small bugs and simple code.
- bebugger if complex code

## Fix:

- we can finally fix it so we can correct the bug.
- replace the wrong solution with new correct solution that actually work.

## prevent:

- is the final step to prevent it from happenning again
- search for the same bug in similar code.
- writing tests using testing software.

# Debugging with the Console and Breakpoints:

