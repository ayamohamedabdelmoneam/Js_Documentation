# HTML DOM Methods:

- HTML DOM methods are actions you can perform (on HTML Elements).
- HTML DOM properties are values (of HTML Elements) that you can set or change.

# The DOM Programming Interface:

- The HTML DOM can be accessed with JavaScript (and with other programming languages).
- In the DOM, all HTML elements are defined as objects.
- The programming interface is the properties and methods of each object.
- A property is a value that you can get or set (like changing the content of an HTML element).
- A method is an action you can do (like add or deleting an HTML element).

## Example:

- The following example changes the content (the innerHTML) of the <p> element with id="demo":
- In the example , getElementById is a method, while innerHTML is a property.

```html
<html>
  <body>
    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = "Hello World!";
    </script>
  </body>
</html>
```

## 1-The getElementById Method:

- The most common way to access an HTML element is to use the id of the element.

## 2-document.getElementsByTagName(name):

- Find elements by tag name

## 3-document.getElementsByClassName(name):

- Find elements by class name

## 4-element.setAttribute(attribute, value):

- Change the attribute value of an HTML element

<hr>

# Adding and Deleting Elements:

## 1-document.createElement(element):

- Create an HTML element

## 2-document.removeChild(element):

- Remove an HTML element

## 3-document.appendChild(element):

- Add an HTML element

## 4-document.replaceChild(new, old):

- Replace an HTML element

## 5-document.write(text):

- Write into the HTML output stream
