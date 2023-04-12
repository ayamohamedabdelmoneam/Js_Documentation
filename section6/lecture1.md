# How Js work behind the scence, How language actually work ?

- js is high level prototype based object oriented multi paradigm garbage-collected programming language with first class function & Non blocking event loop concurrency model .
<hr>

## 1- Js Is High Level :

- as you might already know every program that runs on your computer need some hardware resources such as (memory, cpu) to do it work .
- there are low-level language like (c) where you have to manually manage these resources, such as asking computer for memory to create a new variable.
- on the other hand you have high-level language like (js & python ) where we don't have to mange these resources manually because this language so-called abstractions that take all of that work away from us .
- developers doesn't have to worry every thing happens automatically.
- That Make language easy to use and to learn but the down side the programs that never become fast or optimized as c programs .
<hr>

## 2- Js Is A Carbage-Collected:

- One of the most powerfull tool is take developer away from manage memory.
- Is an algorithm inside javascript engine which automatically removes ald, unused objects from memory inorder to clog it up with unnecessary stuff.
- JS Like has a cleaning guy who cleans memory time to time.

<hr>

## 3- JS Is Interpreted:

- as you know computer only understand two number zero and one called machine language.
- We simply write Human readable js code then converts the code into machine language using compiler that happen inside the js engine.

<hr>

## 4- Js Is Multi-Paradigm :

- is approach and mind set of structuring code which will direct your coding style and technique.
- we can use what ever paradigm we want .

### There Are three types of programming :

- 1- procedual programming (PP)
- 2- object-oriented programming (OOP)
- 3- function programming (FP)

### We Can Also Classigy Pradigms as :

- 1- imperative.
- 2- declartive.

<hr>

## 5- Js Is Object-Oriented Programming:

- it is prototype based object oriented approach .
- that's mean every thing in js is object, except the premitive values such as numbers , strings.
- like array just object .
<hr>

## 6- Js Is First Class Function :

- functions are simply treated as regular variables we can pass them to other functions & return them from functions.

<hr>

## 7- Js Is Dynamic Language:

- actually mean dynamically-typed language.
- no data type definition types become known at run time
- data types of variables is automatically changes.
<hr>

## 8 & 9- Js Is single Threaded & non blocking event loop :

- Thread is a set of instructions that's executed in xomputer CPU
- js is one single thread which means that can be execute one piece of code at a time .
- in order to understand concurrency modell and the event loop in js we have first to know some common terms associated with it, (callstack, TheBrowser, heap, event loop)

### What is Concurrency model ?

- js has a concurrency model based on event loop , which is responsible for executing code

### What about long runing tasks ?

- like fetching data from a remote server.
- we want non blocking behaviour how achieve that ?
  - by using event loop takes long running tasks and executes them in the background and puts them back in the main thread once they finished

## Event Loop:

- simply checks the call stack is empty which meansn there are no functions in the stack .
