import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import AlertBox from "../Alert/AlertBox";
import OrderSummary from "./OrderSummary";
const CheckoutForm = () => {
  const { cart } = useContext(CartContext);
  const { isAuth } = useContext(AuthContext);
  const [cartCheck, setCartCheck] = useState([]);
  const [err, setErr] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    phone: "",
    pinCode: "",
  });
  if (!isAuth) {
    // return <Navigate to="/" />;
  }
  useEffect(() => {
    setCartCheck(cart);
  }, [cart]);
  const errorCheck = () => {
    if (
      userDetails.fname == "" ||
      userDetails.lname == "" ||
      userDetails.address == "" ||
      userDetails.city == "" ||
      userDetails.phone == "" ||
      userDetails.pinCode == ""
    ) {
      return true;
    }

    return false;
  };
  const inputDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const storeDetails = (e) => {
    e.preventDefault();
    if (!errorCheck()) {
      localStorage.setItem("shippingDetails", JSON.stringify(userDetails));
      setErr(false);
      setUserDetails({
        fname: "",
        lname: "",
        address: "",
        city: "",
        phone: "",
        pinCode: "",
      });
    } else {
      setErr(true);
    }
  };
  return (
    <Box mt="2rem">
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Enter Shipping Details
        </Heading>
      </Stack>
      <Flex p="2rem" justifyContent="space-around">
        <Flex boxShadow="md" p="1rem">
          <form onSubmit={storeDetails}>
            <Stack spacing={4}>
              {err ? (
                <AlertBox status="error" msg="All Fields Mandatory !" />
              ) : (
                ""
              )}
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="First Name"
                      onChange={inputDetails}
                      name="fname"
                      value={userDetails.fname}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      onChange={inputDetails}
                      name="lname"
                      value={userDetails.lname}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="street" isRequired>
                <FormLabel>Street Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Address"
                  onChange={inputDetails}
                  name="address"
                  value={userDetails.address}
                />
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="City"
                    onChange={inputDetails}
                    name="city"
                    value={userDetails.city}
                  />
                </InputGroup>
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="pinCode" isRequired>
                    <FormLabel>Pin Code</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Pin Code"
                        onChange={inputDetails}
                        name="pinCode"
                        value={userDetails.pinCode}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="phone" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Phone Number"
                        onChange={inputDetails}
                        name="phone"
                        value={userDetails.phone}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
              </HStack>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.500"}
                  color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                  type="submit"
                >
                  Save
                </Button>
              </Stack>
            </Stack>
          </form>
        </Flex>
        <Flex>
          <Box>
            <OrderSummary
              isElement={
                cartCheck.length == 0
                  ? cartCheck.length
                  : !err
                  ? cartCheck.length
                  : 0
              }
              btnText="Submit Order"
              path="/placedOrderInfo"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutForm;
