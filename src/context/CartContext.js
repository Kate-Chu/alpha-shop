import React from "react";
import items from "../data/items";

const CartContext = React.createContext({ step: 1, items, shippingFee: 0 });

export default CartContext;
