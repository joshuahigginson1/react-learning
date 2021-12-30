import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
console.log(element);

// Babel will compile this down to a method of 'React.CreateElement' which is why we have to import React.
// At the top, even though we are not going to directly use the object in this code.

// First argument - what we want to render, second argument is the area in the REAL browser DOM.
ReactDOM.render(element, document.getElementById("root"));
