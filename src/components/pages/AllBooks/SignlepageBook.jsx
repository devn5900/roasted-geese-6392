import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import SinglePageLoader from "./SinglePageLoader";
export default function SignlepageBook() {
  const param = useParams();
  const [data, setData] = useState({});
  const { addToCartSuccess } = useContext(CartContext);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetchData(param.id);
  }, [param]);

  const fetchData = async (id) => {
    setLoad(true);
    const res = await axios.get(
      `https://frantic-red-knickers.cyclic.app/books/${id}`
    );
    setData(res.data);
    setLoad(false);
  };
  if (load) {
    return <SinglePageLoader />;
  }
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={data?.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.title}
            </Heading>
            <Text fontWeight={300} fontSize={"2xl"}>
              ${data?.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"2xl"} fontWeight={"300"}>
                {data.subtitle}
              </Text>
              <Text fontSize={"lg"}>{data.desc}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Info
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem fontWeight="bold">Publisher</ListItem>
                  <ListItem fontWeight="bold">Language</ListItem>
                  <ListItem fontWeight="bold">Year</ListItem>
                  <ListItem fontWeight="bold">Pages</ListItem>
                  <ListItem fontWeight="bold">ISBN Number</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{data?.publisher}</ListItem>
                  <ListItem>{data?.lang}</ListItem>
                  <ListItem>{data?.year}</ListItem>
                  <ListItem>{data?.pages}</ListItem>
                  <ListItem>{data?.isbn13}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg="gray.900"
            color="white"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              addToCartSuccess({ type: "addToCart", payload: data });
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
