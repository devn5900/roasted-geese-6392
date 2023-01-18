import { Box, HS, Center } from "@chakra-ui/react";
import React from "react";

const NavOffers = ({ msg }) => {
  return (
    <Center bg="#3E5962" color="white" p={2}>
      {msg}
    </Center>
  );
};

export default NavOffers;
