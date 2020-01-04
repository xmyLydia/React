import React from 'react';
import classes from './Cockpit.css'
import { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';
 

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP request...
    // const timer =   setTimeout(()=>{
    //   alert('save data to cloud');
    // },1000);
    toggleBtnRef.current.click();
    return () => {
      //  clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  })

  const assignedClass = [];
  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClass.push(classes.red); //class = ["red"]
  }
  if (props.personsLength <= 1) {
    assignedClass.push(classes.bold);//["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClass.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={buttonClass}
        alt={props.showPersons ? 1 : 0}
        onClick={props.clicked}>Toggle persons</button>

      {<button onClick={authContext.login}>log in</button>}

    </div>
  );
}
export default React.memo(cockpit);