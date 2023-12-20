# React
// React.createElement is an object

/**
 * 
 * <div id="parent">
 *    <div id="child">
 *          <h1>Im H1 tag</h1>
 *     </div>
 * </div>
 * 
 * ReactElement is an object that converts into HTML elemnt that browsers understand
 */
// const heading = React.createElement(  
//     "h1",     // props are children + attribute
//      { id: "heading" }, // attribute
//       "Hello React"  // children 
// );

//console.log(heading); // heading is an object here not an h1 tag yet

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"Im H1 Tag")// single child
//         )
// );

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


# Parcel
- it builds development build
- it creates local server
- it refreshes after every save : HMR = Hot Module Replacememnt
- File watching algorithm written in c++
- faster build due to caching in parcel
- do image optimization
- do bundling - minify files
- compressing
- does consistent hashing
- does code splitting
- differential buddling - to support older browser
- diagnostic - error suggestion
- error handling
- tree shaking - remove unused code
- provide HTTPs
- Different dev and prod bundles