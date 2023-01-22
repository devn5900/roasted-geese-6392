const CartReducer = (cart, action) => {
  switch (action.type) {
    case "addToCart":
      return [
        ...cart,
        { ...action.payload, quantity: 1, cartPrice: action.payload.price },
      ];
    case "getCartItem":
      return [...cart];
    case "updateQuantity":
      return [...action.payload];
    case "reset":
      return [];
    default:
      return cart;
  }
};

export default CartReducer;
