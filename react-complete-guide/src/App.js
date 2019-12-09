import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Jobs', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, world</h1>
        <h2>test</h2>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name}age={this.state.persons[0].age}>My hobby: swimming</Person>
        <Person name={this.state.persons[1].name}age={this.state.persons[1].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'));
  }
}

export default App;
