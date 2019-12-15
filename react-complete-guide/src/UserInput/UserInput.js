import React from 'react';
import '../Person/Person.css'

const userInput = (props) => {
    const style = {
        border:'2px solid red'
    };
    return (
        <div >
            <input type="text" style = {style}
                onChange={props.userNameChanged}
                value={props.currentUsername} >
            </input>
        </div>
    )
};

export default userInput;