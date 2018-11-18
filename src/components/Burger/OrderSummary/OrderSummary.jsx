import React, { Component } from "react";
import Button from "../../UI/Button/Button";



class OrderSummary extends Component{
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      (ingKeys, indx) => {
        return (
          <li key={ingKeys}>
            <span style={{ textTransform: "capitalize" }}>{ingKeys}</span>:{" "}
            {this.props.ingredients[ingKeys]}
          </li>
        );
      }
    );
    
    return (
      
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {this.props.price.toFixed(2)} </strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={this.props.cancelPurchase}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={this.props.continuePurchase}>
        CONTINUE
      </Button>
    </>
      );
  }
}

export default OrderSummary;
