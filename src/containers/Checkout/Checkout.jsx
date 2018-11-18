import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const updatedIngredients = {};
    let price = 0;
    for (let param of query.entries()) {
      //['salad', '1']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        updatedIngredients[param[0]] = +param[1]; //'+' converts to number
      }
    }
    this.setState({ ingredients: updatedIngredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    //receiving router props
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          //use render in order to pass props
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </>
    );
  }
}

export default Checkout;
