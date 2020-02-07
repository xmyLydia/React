import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
 

class OrderSummary extends Component { 

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(idKey => {
                return <li key={idKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {idKey}:
                    </span>
                    {this.props.ingredients[idKey]}
                </li>
            })
        return (<Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to check out?</p>
            <Button
                btnType="Danger"
                clicked={this.props.purchaseCanceled}
            >CANCEL</Button>
            <Button
                btnType="Success"
                clicked={this.props.purchaseContinued}
            > CONTINUE </Button>
          
        </Aux>);
    } 
};
export default OrderSummary;