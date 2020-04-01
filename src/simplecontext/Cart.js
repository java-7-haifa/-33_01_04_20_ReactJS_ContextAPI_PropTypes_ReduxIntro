import React from 'react';
import Wrapper from './Wrapper';

export const CartContext = React.createContext();

export default class Cart extends React.Component{
    state = {
        totalPrice: 0
    }

    updatePrice = (price)=>{
        this.setState({totalPrice : this.state.totalPrice + price});
    }

    render(){
        return (
            <div>
                <h2>Cart</h2>
                <CartContext.Provider 
                value={{
                    price:this.state.totalPrice,
                    update: this.updatePrice
                }}
                >
                 <Wrapper />
                </CartContext.Provider>
            </div>
        );
    }
}