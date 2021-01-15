console.log("app.js is running");

//JSX - JavaScript XML
var template = <h1>This is new JSX from app.js</h1>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);