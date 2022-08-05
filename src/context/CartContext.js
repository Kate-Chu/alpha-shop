import React from "react";
import items from "../data/items";

const CartContext = React.createContext({ step: 1, items });

export default CartContext;
