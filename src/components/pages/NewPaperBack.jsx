import {
  Box,
  Icon,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Center,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
const NewPaperBack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    newBook();
  }, []);
  const newBook = async () => {
    const res = await axios.get(
      " http://localhost:3000/books?_page=1&_limit=7"
    );
    console.log(res.data);
    setData(res.data);
  };

  return (
    <Box w="85%" m="auto" mt="1rem" mb="1rem">
      <Flex justifyContent="space-between" pt="2rem" pb="1rem" size="2rem">
        <Text fontSize="2rem">New in Paperback</Text>
      </Flex>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        {data &&
          data?.map((el, i) => {
            return (
              <>
                {" "}
                <GridItem
                  rowSpan={i == 0 ? 2 : 0}
                  colSpan={i == 0 ? 2 : 1}
                  p={2}
                >
                  <Box>
                    {i !== 0 ? <Image src={el.image} fit /> : ""}
                    {i == 0 ? (
                      <Flex
                        direction="column"
                        alignItems="center"
                        w="70%"
                        m="auto"
                      >
                        <Image src={el.image} fit />
                        <Heading size="md">{el.title}</Heading>
                        <Text>{el.publisher}</Text>
                        <Flex>
                          <Icon as={FaStar} color="yellow"></Icon>
                          <Icon as={FaStar} color="yellow"></Icon>
                          <Icon as={FaStar} color="yellow"></Icon>
                          <Icon as={FaStar} color="yellow"></Icon>
                          <Icon as={FaStarHalfAlt} color="yellow"></Icon>
                        </Flex>
                        <Text>{el.desc.substr(0, 143)}</Text>
                        <Button
                          size="md"
                          bg="#3E5962"
                          mt={3}
                          color="white"
                          _hover={{
                            bg: "white",
                            color: "#3E5962",
                            border: "1px solid #3E5962",
                          }}
                        >
                          Add To Cart
                        </Button>
                      </Flex>
                    ) : (
                      <Center>
                        <Button
                          size="sm"
                          bg="#3E5962"
                          color="white"
                          _hover={{
                            bg: "white",
                            color: "#3E5962",
                            border: "1px solid #3E5962",
                          }}
                        >
                          Add To Cart
                        </Button>
                      </Center>
                    )}
                  </Box>
                </GridItem>
              </>
            );
          })}
      </Grid>
    </Box>
  );
};

export default NewPaperBack;
