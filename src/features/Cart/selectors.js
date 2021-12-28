import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

// count total of products quantity in cart
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Calculate total money of Cart items
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.quantity * item.product.salePrice, 0)
);
