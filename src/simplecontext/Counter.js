import React from "react";
import { CartContext } from "./Cart";

export default class Counter extends React.Component {
  render() {
    return (
      <CartContext.Consumer>
        {context => {
          return (
            <div>
              <button onClick={() => context.update(-1000)}> - </button>
              <span>Total price: {context.price}</span>
              <button onClick={() => context.update(1000)}> + </button>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
