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
  useToast,
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
  const [order, setOrder] = useState(true);
  const toast = useToast();
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    phone: "",
    pinCode: "",
  });

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
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  const inputDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const storeDetails = (e) => {
    e.preventDefault();
    if (!errorCheck()) {
      localStorage.setItem("shippingDetails", JSON.stringify(userDetails));
      setErr(false);
      setOrder(false);
      // setUserDetails({
      //   fname: "",
      //   lname: "",
      //   address: "",
      //   city: "",
      //   phone: "",
      //   pinCode: "",
      // });
      return toast({
        title: "Address Saved !",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      setErr(true);
      setOrder(true);
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
                      isDisabled={!order}
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
                      isDisabled={!order}
                      value={userDetails.lname}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="street">
                <FormLabel>Street Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Address"
                  isDisabled={!order}
                  onChange={inputDetails}
                  name="address"
                  value={userDetails.address}
                />
              </FormControl>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="City"
                    onChange={inputDetails}
                    isDisabled={!order}
                    name="city"
                    value={userDetails.city}
                  />
                </InputGroup>
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="pinCode">
                    <FormLabel>Pin Code</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Pin Code"
                        onChange={inputDetails}
                        name="pinCode"
                        value={userDetails.pinCode}
                        isDisabled={!order}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="phone">
                    <FormLabel>Phone Number</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Phone Number"
                        onChange={inputDetails}
                        name="phone"
                        isDisabled={!order}
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
                  isDisabled={!order}
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
                cartCheck.length > 0 ? (order ? 0 : cartCheck.length) : 0
              }
              btnText="Submit Order"
              path="/payment"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutForm;
