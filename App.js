import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * what if we need more than one h1 element inside "child"
 */
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"Im H1 Tag"),
        React.createElement("h2",{},"Im H2 Tag"),
    ]// we need array for more than one children
        )
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));// react is only rendered into root div, createRoot is responsible to assign root in react

root.render(parent); // render method is responsible for to take this object and create the H1 tag that the browsers understand and  put it up inside the root element
