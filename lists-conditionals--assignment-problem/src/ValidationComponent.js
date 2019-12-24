import React from 'react';

const validationComponent = (props) => {
    if (props.textLength < 3) {
        return (
            <div >
                <p >Text is too short</p>
            </div>
        )
    } else {
        return (
            <div >
                <p >Text is enough, length is {props.textLength}  </p>
            </div>
        )
    }
}

export default validationComponent;