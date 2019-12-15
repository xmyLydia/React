import React from 'react';
import './Person.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> The username is {props.username} </p>
            <p > My location is </p>

        </div>
    )
};

export default userOutput;