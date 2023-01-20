import { Box, Flex, Image, Input, Icon, Badge } from "@chakra-ui/react";
import React, { useContext, useReducer } from "react";
import CodeBook from "../images/CodeBook.png";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
const NavIcon = () => {
  const { cart } = useContext(CartContext);

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
          <Link to="/cart">
            <Icon as={FaCartPlus} fontSize="2rem" color="#3E5962"></Icon>
          </Link>
          <Badge position="absolute" bg="#3E5962" color="white">
            {cart.length}
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavIcon;
