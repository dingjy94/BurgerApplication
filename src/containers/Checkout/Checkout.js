import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Aux from '../../hoc/Aux';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact');
  }

  render() {
    let checkoutSummary = <div>no ingredients find</div>;
    if (this.props.ings !== null) {
      checkoutSummary = <CheckoutSummary 
                          ingredients={this.props.ings} 
                          cancel={this.checkoutCancelHandler} 
                          continue={this.checkoutContinueHandler} />
    }
    return (
      <Aux>
        {checkoutSummary}
        <Route 
          path={this.props.match.path + '/contact'}
          component={ContactData}/>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);