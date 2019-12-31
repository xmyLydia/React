import React, { Component } from 'react';
import './App.css';
import  classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username: 'stateUserName',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ... this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [... this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
      }
    )
  }

  userNameChangeHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  userNameChangedWithTwoWayBinding = (inputUsername) => {
    this.setState(
      {
        username: inputUsername
      }
    )
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {

    let persons = null;
    let buttonClass = [classes.Button];


    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id} ><Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                
                changed={(event) => this.nameChangeHandler(event, person.id)}>
              </Person></ErrorBoundary>
            })
          }
        </div>
      )
     buttonClass.push(classes.Red);
    };

    const assignedClass = [];
    if (this.state.persons.length <= 2) {
      assignedClass.push(classes.red); //class = ["red"]
    }
    if (this.state.persons.length <= 1) {
      assignedClass.push(classes.bold);//["red", "bold"]
    }

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClass.join(' ')}>This is really working!</p>
        <button className = {buttonClass.join(' ')}
          alt={this.state.showPersons ? 1 : 0}
          onClick={this.togglePersonHandler}>Toggle persons</button>
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
