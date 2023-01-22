import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import BookCard from "./BookCard";
import BookSkeleton from "./BookSkeleton";

const BookCards = ({ data, pagination, page, updatePage }) => {
  console.log(pagination);
  return (
    <Box p="1rem">
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data?.map((el) => {
          return (
            <GridItem key={el.id}>
              {" "}
              <BookCard {...el} el={el} />{" "}
            </GridItem>
          );
        })}
      </Grid>
      <Box>
        <Flex justify="center">
          <HStack p="2rem">
            <Stack direction="row" spacing={4} justify="center" align="center">
              <Button
                isDisabled={page == 1}
                onClick={() => {
                  updatePage(-1);
                }}
                colorScheme="teal"
                variant="solid"
              >
                Prev
              </Button>
              <Button disabled colorScheme="teal" variant="outline">
                {page}
              </Button>
              <Button
                isDisabled={Number(page) == Math.floor(Number(pagination) / 10)}
                colorScheme="teal"
                onClick={() => {
                  updatePage(1);
                }}
                variant="solid"
              >
                Next
              </Button>
            </Stack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookCards;
