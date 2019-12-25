import React from 'react';
import './BoxStyle.css';

const charComponent = (props) => {

    return (
        <div className="CharComponent" onClick={props.click}>
            <p>{props.textContent}</p>
            <p>{props.children}</p>
        </div>
    )
}
export default charComponent;