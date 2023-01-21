import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import NavOffers from "../../Routes/NavOffers";
import CartProduct from "./CartProduct";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../../context/CartContextProvider";
import EmptyCart from "./EmptyCart";
import banner from "../../images/banner.png";
import OfferInfo from "../OfferInfo";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    setCartData(cart);
  }, [cart]);
  console.log(cartData);
  return (
    <Box>
      <Box>
        <NavOffers msg=" 50% Off Thousands of Hardcover Books & More Deals - Online & In Stores Shop Now" />
        <OfferInfo banner={banner} />
        <Flex direction="column" mt="3rem" alignItems="center">
          <Flex bg="pink.100" p="1.5rem" borderRadius="md" mb="1rem">
            {cartData.length > 0 ? (
              <>
                {" "}
                <Text size="sm" fontWeight="bold">
                  YOUR ORDER QUALIFIES FOR FREE STANDARD SHIPPING -
                </Text>
                <Text color="green.400" ml="0.4rem">
                  Details
                </Text>
              </>
            ) : (
              <>
                <Text size="sm" fontWeight="bold">
                  FREE SHIPPING ON ORDERS OF $40+
                </Text>
              </>
            )}
          </Flex>
        </Flex>
        <Flex justifyContent="space-around">
          <Box w="60%">
            <Heading fontWeight="thin">My Shopping Cart</Heading>
            <Flex direction="column" mt="1rem" mb="1rem">
              {cartData && cartData.length ? (
                cartData?.map((el) => {
                  return <CartProduct key={el.id} {...el} />;
                })
              ) : (
                <EmptyCart />
              )}
            </Flex>
          </Box>
          <Box>
            <OrderSummary
              isElement={cartData.length}
              btnText="Order Now"
              path="/checkout"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cart;
