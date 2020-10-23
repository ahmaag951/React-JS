// we are not going directly to use this object in our code, but babel will convert the jsx code to 'React.createElement(...)', so you need this import
import React from 'react';
// this is used to render the element to the real dom
import ReactDom from 'react-dom'

const element = <h1>Hello world! this is me writing react application from scrach by myself!</h1>

// now if you logged this element, you will see a react element, this is the object that is stored in the virtual dom
console.log(element);
// you don't have to refresh the page, this is because of what we call hot module replacement

// the second parameter is where in the dom we want to render this

// in public  => index.html, you will find a div with id root, it's the main container for our react app
ReactDom.render(element, document.getElementById('root'));

// now we are going to create app component and render it instead of h1 element, so the app component will be the root component for our application
// and it will contain children