# The addEventListener() method:

- Event Is the somthing that happens on the page for Example a (mouse click, mouse moving, or key press or many other events )
- then with the event listener we can wait for a certain event to happen and then react to it .
- Add an event listener that fires when a user clicks a button:
- The addEventListener() method attaches an event handler to the specified element.
- The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
- You can add many event handlers to one element.
- You can add many event handlers of the same type to one element, two "click" events.
- You can add event listeners to any DOM object not only HTML elements. the window object.
- The addEventListener() method makes it easier to control how the event reacts to bubbling.
- When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
- You can easily remove an event listener by using the removeEventListener() method.

# Syntax:

```js
element.addEventListener(event, function, useCapture);
```

- The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
- The second parameter is the function we want to call when the event occurs.
- The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

# Add an Event Handler to an Element

## Example

- Alert "Hello World!" when the user clicks on an element:

```js
element.addEventListener("click", function () {
  alert("Hello World!");
});
```

# You can also refer to an external "named" function:

## Example:

- Alert "Hello World!" when the user clicks on an element:

```js
element.addEventListener("click", myFunction);

function myFunction() {
  alert("Hello World!");
}
```

# Add Many Event Handlers to the Same Element

- The addEventListener() method allows you to add many events to the same element, without overwriting existing events:

## Example:

```js
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
```

# You can add events of different types to the same element:

## Example:

```js
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

# Add an Event Handler to the window Object

- The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.

## Example:

- Add an event listener that fires when a user resizes the window:

```js
window.addEventListener("resize", function () {
  document.getElementById("demo").innerHTML = sometext;
});
```

# The removeEventListener() method:

- The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:

## Example:

```js
element.removeEventListener("mousemove", myFunction);
```
