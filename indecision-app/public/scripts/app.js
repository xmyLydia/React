"use strict";

console.log("app.js is running");

//JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "This is new JSX from app.js"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
