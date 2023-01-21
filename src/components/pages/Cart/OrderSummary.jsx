import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContextProvider";
import LoginPage from "../LoginSignup/LoginPage";

const OrderSummary = ({ isElement, btnText, path }) => {
  const { totalPriceItem } = useContext(CartContext);
  const { totalPrice, itemCount } = totalPriceItem();
  const toast = useToast();
  const { isAuth } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card boxShadow="md" minW="sm" borderRadius="none">
      <CardHeader>
        <Center>
          <Heading size="md">Order Summary</Heading>
        </Center>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing={5}>
          <Box>
            <Flex justifyContent="space-between">
              <Text>Subtotal({itemCount} Items)</Text>
              <Text>${totalPrice}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Estimated Shipping</Text>
              <Text>Free</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Estimated Tax</Text>
              <Text>$0.00</Text>
            </Flex>
          </Box>
          <Box>
            <Center>
              {isAuth ? (
                <Link to={path}>
                  <Button
                    isDisabled={isElement <= 0}
                    size="md"
                    colorScheme="blue"
                  >
                    {btnText}
                  </Button>
                </Link>
              ) : (
                <Button onClick={onOpen} size="md" colorScheme="blue">
                  Log in
                </Button>
              )}
            </Center>
            <LoginPage isOpen={isOpen} onClose={onClose} />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default OrderSummary;
