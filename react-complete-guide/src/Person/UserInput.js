import React from 'react';
import './Person.css'

const userInput = (props) => {
    return (
        <div >
            <input type="text"
                onChange={props.userNameChanged}
                value={props.username} >
            </input>
        </div>
    )
};

export default userInput;