import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    });
  return (
    <Aux>
      <h3>Your Order is:</h3>
      <p>Burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Price: </strong>{props.price.toFixed(2)}</p>
      <p>Continue to Check out?</p>
      <Button btnType='Success' clicked={props.purchaseContinue}>Continue</Button>
      <Button btnType='Danger' clicked={props.purchaseCancel}>Cancel</Button>
    </Aux>
  );
};

export default orderSummary;