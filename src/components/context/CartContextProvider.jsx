import { useToast } from "@chakra-ui/react";
import React, { createContext, useEffect, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCartDispatcher] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const toast = useToast();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart) || []);
  }, [cart]);
  const resetCart = () => {
    setCartDispatcher({ type: "reset" });
  };
  const addToCartSuccess = ({ type, payload }) => {
    setCartDispatcher({ type, payload });
    return toast({
      title: "Added to the Cart",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  const upDateQuntity = (type, payload, id) => {
    setCartDispatcher({
      type: "updateQuantity",
      payload: [
        ...cart.filter((el) => {
          if (type == "increase") {
            if (el.id == id) {
              el.quantity++;
              el.cartPrice = (Number(el.price) * Number(el.quantity)).toFixed(
                2
              );
            }
            return el;
          } else {
            return el;
          }
        }),
      ],
    });
    console.log(type, payload, id);
  };
  const decreaseQuantityCart = (type, payload, id) => {
    setCartDispatcher({
      type: "updateQuantity",
      payload: [
        ...cart.filter((el) => {
          if (payload == 1) {
            if (el.id != id) {
              return el;
            }
          } else {
            if (type == "decrease") {
              if (el.id == id) {
                el.quantity--;
                el.cartPrice = (
                  Number(el.cartPrice) - Number(el.price)
                ).toFixed(2);
              }
              return el;
            } else {
              return el;
            }
          }
        }),
      ],
    });
  };

  const deleteCartItem = (type, id) => {
    setCartDispatcher({
      type: "updateQuantity",
      payload: [
        ...cart.filter((el) => {
          if (el.id != id) {
            return el;
          }
        }),
      ],
    });
  };

  const totalPriceItem = () => {
    let totalPrice = 0;
    cart.forEach((el) => {
      totalPrice += Number(el.cartPrice);
    });

    return { totalPrice: totalPrice.toFixed(2), itemCount: cart.length };
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartSuccess,
        upDateQuntity,
        decreaseQuantityCart,
        deleteCartItem,
        totalPriceItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
