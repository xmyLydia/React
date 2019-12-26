import React from 'react';

const validationComponent = (props) => {
    let validMessage = 'Text long enough';

    if (props.textLength < 3) {
        validMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validMessage}</p>
        </div>
    )
}

export default validationComponent;