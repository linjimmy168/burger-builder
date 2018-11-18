import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredientSummary)
        .map(igKey => {
            return <li key={igKey}>
                <span
                    style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredientSummary[igKey]}
            </li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Prices: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Check out?</p>
            <Button clicked={props.purchaseCancel} btnType="Danger" >CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Aux>
    )
}


export default orderSummary;