import React, { Component } from 'react';
import classes from './Person.css';
import { render } from 'react-dom';

class Person extends Component {
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
   
    render() { 
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
};

export default Person;
