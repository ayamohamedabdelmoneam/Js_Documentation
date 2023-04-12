# JavaScript Engine And Run Time :

## 1- How js engine translate js code to achine code ?

- Js Engine:

  - is computer program that exeutes js code .

  - Browser has it's own set of APIs like settimeout and XMLHttp requests which aren't specified in javascript run time
  - every browser has own js engine but most probably well known engine is google V-eight
  - V-eight powers google chrom, that is special web APIs exist in browser environment not inside javascript environment, so we can say that these APIs introduce concurrency into the mix .

- Js Components :
  - Call Stack
  - Heap

### 1- Heap Is :

- unstructured memory pool.
- which stores all objects that our applications needs.
- it's mostly the place where objects are allocated .

### 2- Call Stack Is :

- the place where our code is actually executed using somthing called execution context.

## How code is compiled to machine code

- The difference between compilation & interpretation

## Compilation :

- Is the process of converted the enter source code into machine code at once and tjhen write the machine code in protable file that can be executed on any computer.
- machine code is built first then it is execute in the CPU so in the processor.

## Interpretation :

- interpreter runs through source code then execute it line by line.
- the code is read and execute all at the same time execution line by line but code still need to be converted into machine code .
- now js used to be purelu interpreted language but tjhe problem her is much much slower than compiled language .
- but we use modern js which use mix between compilation and interpretation which is called (JIT ) Just In Time : which convert enter source code into machine code tjhen execute it immediately.

## JS Engine How Run ?

- 1- make parsing the code : during this process the code parsed into data structure called (AST) Absract Syntax Tree

  - This work by spliting each line of code into pieces that are meanning full to the language like the const & Function keyword and then save all this pieces in the tree in a structured way .
  - This step is also check if there are any sntax error.
  - and the result of the tree will be used later to generate the machine code

- 2- Compilation :

  - Js Use JIT : Js Take generated AST code and convert it into machine code .

- 3- execution : Happen in the call stack .

## Why Modern Javascript Is Fast ?

- because actually have some pretty clever optimization startgies
<hr>

## JS Run Time :

### Web APIs :

- are functionalities provided to the engine accessible on window object .
- like (DOM , Timers, Fetch API, Console)
- That's Not part of js Language js simply get access to this api throught the global window object .
- Web Api still part of run time
- run time just like abox that contains all the js related stuff that we need also include call back queue

## Call Back Queue :

- is the data structure contains all the call back functions that are ready to be executed
