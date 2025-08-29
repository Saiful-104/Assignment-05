  Readme

// Ans the question no -01

1. getElementById("id")

*  Selects only one element by its unique ID. 
*  Returns a single element (or null if not found). 
*  Fastest method when you know the ID. 

2. getElementsByClassName("class")

*  Selects all elements with a specific class. 
*  Returns an HTMLCollection (array-like). 
*  if DOM changes, the collection updates automatically. 

3. querySelector("selector")

*  Selects the first element that matches a CSS selector. 
*  Returns a single element (or null). 
*  does not update when DOM changes. 
*  Supports any CSS selector 

4. querySelectorAll("selector")

*  Selects all elements that match a CSS selector. 
*  Returns a NodeList (array-like). 
*  does not update after DOM changes. 
*  Supports any CSS selector. // Ans the question no -02

1.  Create element → document.createElement("tag") 
2.  Add content → .textContent / .innerHTML 
3.  Set attributes → .id, .className, .setAttribute() 
4.  Insert into DOM → *  appendChild() → end 
*  prepend() → beginning 
*  insertBefore() → before another element 
*  insertAdjacentElement() → specific position 



// Ans the question no -03

*  When an event happens on a child element, it first runs there, then bubbles up to parent → ancestor → document. 
*  Default behavior in JS. 
*  Stop it with event.stopPropagation(). 
*  Opposite = Event Capturing (top → down). 
* Formula: Child → Parent → Document 
 

// Ans the question no -04
*  Add one event listener on a parent to handle events of its children. 
*  Works via event bubbling. 
*  Check which child triggered the event using event.target. 
**Benefits
1.  Better performance – fewer listeners. 
2.  Works with dynamic elements – new children automatically handled. 
3.  Cleaner code – easier maintenance. 
* Formula: Parent listener → event bubbles → child handled via event.target

// Ans the question no -05

* preventDefault()
    1.Purpose: Stops the default action of an element.
    2.Example: Prevents a link from navigating or a form from submitting.
    3.Does NOT stop event bubbling.

* stopPropagation()
    1.Purpose: Stops the event from bubbling (or capturing) to parent elements.
    2.Example: Click on a button inside a div won’t trigger the div’s click event.
    3.Does NOT stop default action.