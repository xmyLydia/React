import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constuctor');
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 25 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      username: 'stateUserName',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('[App.js component did update');
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
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((previousState, props) => {
      return {
        persons: persons,
        changeCounter: previousState.changeCounter + 1
      };
    });
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  }
  render() {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
          ></Persons>
        </div>
      )
    };

    return (
      <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        <Aux classes={classes.App}>
          <button onClick={() => {
            this.setState({ showCockpit: false });
          }} >Remove cockpit</button>

          {this.state.showCockpit ?
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler} 
            /> : null}
          {persons}
        </Aux>
      </AuthContext.Provider>
    );
  }
}

export default withClass(App, classes.App);
