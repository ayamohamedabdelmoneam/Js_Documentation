# JavaScript in browser DOM & Events fundamentals:

## What Is The DOM?

- stands for document object model.
- structured reoresentation of html documents.
- allows javascript to access html elemnts and styles to mainpulate them to change text, html attributes and even css styles .
- we can say that DOM is basically a connection point between html documents and javascript code.
- Dom is automatically created by the browser as soon as the html pages loadsand it's stored in a tree structure <br>

<img src = "/section5/download.png">

<br>

- document is special objects that we have access to in js, and this objects serves as an entry point into the dom.
- With the object model, JavaScript gets all the power it needs to create dynamic HTML:
  - JavaScript can change all the HTML elements in the page
  - JavaScript can change all the HTML attributes in the page
  - JavaScript can change all the CSS styles in the page
  - JavaScript can remove existing HTML elements and attributes
  - JavaScript can add new HTML elements and attributes
  - JavaScript can react to all existing HTML events in the page
  - JavaScript can create new HTML events in the page

```
Dom Methods & Properties fpr dom mainpulation is not part of js
js is just a dialect of the ecmascript specfication .
then how does this all work ?
dom & dom methods are part of somthing called web api like a libraries that browser implement.
and this library we can access from our js code
that are automatically available for us
there are many api behind dom like timers & Fetch APi
APi Stands For Aplication Programming Interface

```

## How to select element of HTML In javascript?

- use document.querySelector():
  - is a method that's available on thw document object
  - in this method we need to pass a selector

```js
// this part here first select the element and then on this element we can read the text content property
// when we have multiple . operators they are excuted from left to right
console.log(document.querySelector("").textContent);
```
