import { Box, Flex, Image, Input, Icon, Badge } from "@chakra-ui/react";
import React from "react";
import CodeBook from "../images/CodeBook.png";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const NavIcon = () => {
  return (
    <Box w="80%" m="auto" pb={4}>
      <Flex justifyContent="space-between">
        <Box>
          <NavLink to="/">
            <Image src={CodeBook} alt="Code Book" w={150} />
          </NavLink>
        </Box>
        <Box>
          <Input
            type="search"
            htmlSize={100}
            borderRadius="none"
            width="auto"
            placeholder="Search by Title, Author, Keyword or ISBN"
          />
        </Box>
        <Box>
          <Icon as={FaCartPlus} fontSize="2rem" color="#3E5962"></Icon>
          <Badge position="absolute" bg="#3E5962" color="white">
            0
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavIcon;
