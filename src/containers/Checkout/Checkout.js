import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Aux from '../../hoc/Aux';
import ContactData from './ContactData/ContactData';
import checkoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact');
  }

  render() {
    let checkoutSummary = <Redirect to='/' />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
      checkoutSummary = (
        <Aux>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients = { this.props.ings }
            cancel = { this.checkoutCancelHandler }
            continue={ this.checkoutContinueHandler } />
          < Route
            path = { this.props.match.path + '/contact' }
            component = { ContactData } />
        </Aux>
      );
    }
    return checkoutSummary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
};

export default connect(mapStateToProps)(Checkout);
