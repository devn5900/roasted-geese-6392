import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const OrderSummary = ({ isElement }) => {
  const { totalPriceItem } = useContext(CartContext);
  const { totalPrice, itemCount } = totalPriceItem();
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
              <Button isDisabled={isElement <= 0} size="md" colorScheme="blue">
                Order Now
              </Button>
            </Center>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default OrderSummary;
