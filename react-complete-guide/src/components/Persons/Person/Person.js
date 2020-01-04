import React, { Component } from 'react';
import classes from './Person.css';
import { render } from 'react-dom';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass';
import Persons from '../Persons';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    } 
   
    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render() { 
        console.log('[Person.js] rendering...');
        return ( 
           // <div className={classes.Person} >
           <Aux>
                <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>,
                <p key='i2'>{this.props.children}</p>,
                <input 
                key='i3' 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}
                //ref = {(inputEl)=>{this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                ></input>
                </Aux
                >
           // </div>
           );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);
