import React from "react";
import items from "../data/items";

export const cartActions = {
  changeQuantity: "CHANGE_QUANTITY",
  removeItem: "REMOVE_ITEM",
  changeStep: "CHANGE_STEP",
  selectShippingFee: "SELECT_SHIPPING_FEE",
};

const initialState = { step: 1, items, shippingFee: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY":
      const { id, num } = action.payload;
      const newlineItems = state.items.map((item) => {
        if (item.id === id && item.quantity + num > 0) {
          return {
            ...item,
            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return { ...state, items: newlineItems };

    case "REMOVE_ITEM":
      const newLineItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: newLineItems };

    case "CHANGE_STEP":
      const nextStep = state.step + action.payload.changeStep;
      if (nextStep < 1 || nextStep > 3) return;
      return { ...state, step: state.step + action.payload.changeStep };

    case "SELECT_SHIPPING_FEE":
      return { ...state, shippingFee: action.payload };

    default:
      return { ...state };
  }
};

export default function useCartReducer() {
  return React.useReducer(cartReducer, initialState);
}
