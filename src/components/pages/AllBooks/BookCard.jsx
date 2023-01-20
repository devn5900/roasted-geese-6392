import { Icon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Text,
  Stack,
  Center,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContextProvider";
const BookCard = ({
  title,
  price,
  image,
  id,
  desc,
  lang,
  pages,
  publisher,
  rating,
  year,
  el,
}) => {
  let rate = [];
  for (let i = 1; i <= rating; i++) {
    rate.push(FaStar);
  }
  const { addToCartSuccess } = useContext(CartContext);
  return (
    <Card boxShadow="md" _hover={{ boxShadow: "xl" }}>
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Flex
          justifyContent="space-between
        "
        >
          <Badge fontSize="0.8em" variant="outline" colorScheme="red">
            {year}
          </Badge>

          {rate.length > 0 ? (
            <Badge fontSize="0.8em" colorScheme="white">
              {rate &&
                rate?.map((el, i) => {
                  return <Icon key={i + 1} color="#3E5962" as={el}></Icon>;
                })}
            </Badge>
          ) : (
            ""
          )}
        </Flex>
        <Stack>
          <Heading size="sm">
            {title.split(" ").slice(0, 2).join(" ")}
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              {lang}
            </Badge>
          </Heading>

          <Text size="sm">{desc.substr(0, 40)}</Text>
          <Center>
            <Badge fontSize="0.8em">{publisher}</Badge>
          </Center>
          <Text color="blue.600" fontSize="xl">
            ${price}
          </Text>
        </Stack>
        <Center pt="0.3rem" pb="0.3rem">
          <Button
            size="sm"
            bg="#3E5962"
            color="white"
            _hover={{
              border: "1px solid #3E5962",
              bg: "none",
              color: "#3E5962",
            }}
            onClick={() => {
              console.log(el);
              addToCartSuccess({ type: "addToCart", payload: el });
            }}
          >
            Add To Cart
          </Button>
        </Center>
      </CardBody>
    </Card>
  );
};

export default BookCard;
