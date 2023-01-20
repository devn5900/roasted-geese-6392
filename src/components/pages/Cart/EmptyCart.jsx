import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Icon,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> </Heading>
      </CardHeader>
      <CardBody>
        <Center flexDirection="column">
          <Icon fontSize="3rem" color="red.300" as={FaShoppingBasket}></Icon>
          <Heading size="md">No Item Found ! </Heading>
        </Center>
      </CardBody>
      <CardFooter>
        <Link to="/">
          {" "}
          <Button colorScheme="blue">Explore..</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EmptyCart;
