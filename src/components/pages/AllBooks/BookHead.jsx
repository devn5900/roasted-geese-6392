import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const BookHead = ({ head }) => {
  return (
    <Box mt="1rem">
      <Box>
        {" "}
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading>{head}</Heading>
          <Text size="sm">
            Browse a Front-end with React including Redux,TypeScript and many
            more.
          </Text>
        </Flex>
      </Box>
      <Box w="90%">
        <Flex>
          <Box borderRight="1px solid lightgray" p="1rem">
            <Box>
              <UnorderedList listStyleType="none">
                <Heading size="md" mb="0.7rem">
                  Sort By{" "}
                </Heading>
                <ListItem>
                  <Select placeholder="Price">
                    <option value="lToh">Low to High</option>
                    <option value="hTol">High to Low</option>
                  </Select>
                </ListItem>
                <ListItem>
                  {" "}
                  <Select placeholder="Rating">
                    <option value="lToh">Low to High</option>
                    <option value="hTol">High to Low</option>
                  </Select>
                </ListItem>
                <ListItem>
                  {" "}
                  <Select placeholder="Page">
                    <option value="lToh">Low to High</option>
                    <option value="hTol">High to Low</option>
                  </Select>
                </ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box>right</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookHead;
