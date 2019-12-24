import React from 'react';
import './BoxStyle.css';

const charComponent = (props) => {
     
    return (
        <div className="CharComponent">
            <p>{props.textContent}</p>
           
        </div>
    )
}
export default charComponent;