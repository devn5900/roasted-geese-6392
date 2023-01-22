import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import AlertBox from "../Alert/AlertBox";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Payment() {
  const [err, setErr] = useState(false);
  const [payCom, setPayCom] = useState(false);
  const [pay, setPay] = useState({
    cardNumber: "",
    name: "",
    mmyy: "",
    cvv: "",
  });
  const { isAuth } = useContext(AuthContext);
  const inputPay = (e) => {
    setPay({ ...pay, [e.target.name]: e.target.value });
  };

  const paySubmit = (e) => {
    e.preventDefault();
    if (!checkError()) {
      setErr(false);
      console.log("red");
      setPayCom(true);
    } else {
      setErr(true);
    }
  };

  console.log(pay);
  const checkError = () => {
    if (
      pay.cardNumber == "" ||
      pay.name == "" ||
      pay.mmyy == "" ||
      pay.cvv == ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  if (!isAuth) {
    return <Navigate to="/cart" />;
  }
  if (payCom) {
    return <Navigate to="/orderplaced" />;
  }
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Payment Details
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={paySubmit}>
            {" "}
            {err ? (
              <AlertBox status="error" msg="All Fields Mandatory !" />
            ) : (
              ""
            )}
            <Stack spacing={4} mt="0.5rem">
              <FormControl id="email">
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="text"
                  name="cardNumber"
                  onChange={inputPay}
                  placeholder="Card Number"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Account Holder Name</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    onChange={inputPay}
                    placeholder="Holder Name"
                  />
                </InputGroup>
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>MM/YY</FormLabel>
                    <Input type="month" onChange={inputPay} name="mmyy" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>CVV</FormLabel>
                    <Input
                      type="text"
                      onChange={inputPay}
                      name="cvv"
                      placeholder="CVV Number"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  type="submit"
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Pay Now
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
