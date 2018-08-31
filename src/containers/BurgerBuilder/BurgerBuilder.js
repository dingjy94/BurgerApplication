import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const prices = {
  salad: 0.1,
  bacon: 0.3,
  cheese: 0.15,
  meat: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false
  }

  updatePurchasable (updatedIngredients) {
    const sum = Object.keys(updatedIngredients)
      .map(igKey => {
        return updatedIngredients[igKey];
      })
      .reduce((sum, element) => {
        return sum + element;
      }, 0);
    this.setState({purchasable: sum > 0});
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + prices[type];
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.updatePurchasable(updatedIngredients);
  }

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - prices[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchasable(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('you are continue');
  }

  render () {
    let disabled = {
      ...this.state.ingredients
    };
    for (let ingredient in disabled) {
      disabled[ingredient] = disabled[ingredient] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
            price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          price={this.state.totalPrice}
          disabled={disabled}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;