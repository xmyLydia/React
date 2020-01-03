import React  from 'react';
import classes from './Cockpit.css'
import { useEffect } from 'react';

const cockpit = (props) => {
     useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      //HTTP request...
      setTimeout(()=>{
        alert('save data to cloud');
      },1000);
    }, [props.persons]);
    
    const assignedClass = [];
    let buttonClass = '';
    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClass.push(classes.red); //class = ["red"]
    }
    if (props.persons.length <= 1) {
      assignedClass.push(classes.bold);//["red", "bold"]
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button className={buttonClass}
                alt={props.showPersons ? 1 : 0}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
}
export default cockpit;