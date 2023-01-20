import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  Badge,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { CartContext } from "../../context/CartContextProvider";
const CartProduct = ({
  id,
  title,
  publisher,
  price,
  quantity,
  desc,
  image,
  cartPrice,
}) => {
  const { upDateQuntity, decreaseQuantityCart, deleteCartItem } =
    useContext(CartContext);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt="0.4rem"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Flex alignItems="center" direction={{ base: "column", sm: "row" }}>
            <Box w="50%">
              <Heading size="md">
                {title}
                <Badge ml="1" colorScheme="green" fontSize="0.8em">
                  {publisher}
                </Badge>
              </Heading>

              <Text py="2">{desc.substr(0, 100)}</Text>
            </Box>
            <Box w="50%">
              <Flex justifyContent="space-evenly">
                <Button
                  onClick={() => {
                    upDateQuntity("increase", quantity, id);
                  }}
                  colorScheme="teal"
                  variant="ghost"
                >
                  <Icon as={FaPlus}></Icon>
                </Button>

                <Badge
                  ml="1"
                  pt="0.5rem"
                  pb="0.5rem"
                  pl="1rem"
                  pr="1rem"
                  fontSize="1rem"
                  colorScheme="blue"
                  size="1.5rem"
                >
                  {quantity}
                </Badge>
                <Button
                  colorScheme="blue"
                  isDisabled={quantity == 1}
                  onClick={() => {
                    decreaseQuantityCart("decrease", quantity, id);
                  }}
                  variant="ghost"
                >
                  <Icon as={FaMinus}></Icon>
                </Button>

                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteCartItem("delete", id);
                  }}
                  variant="ghost"
                >
                  <Icon as={FaTimes}></Icon>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
        <CardFooter>
          <Flex w="70%" justifyContent="space-between">
            <Text>
              <Badge fontSize="1.2rem" variant="outline" colorScheme="red">
                Price: ${price}
              </Badge>
            </Text>
            <Text>
              <Badge fontSize="1.2rem" variant="outline" colorScheme="green">
                Total Price: ${cartPrice}
              </Badge>
            </Text>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartProduct;
