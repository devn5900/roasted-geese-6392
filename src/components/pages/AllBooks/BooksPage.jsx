import { Box } from "@chakra-ui/react";
import React from "react";
import NavOffers from "../../Routes/NavOffers";
import BookHead from "./BookHead";
const BooksPage = () => {
  return (
    <Box>
      <NavOffers
        msg="50% Off Thousands of Hardcover Books & More Deals - Online & In Stores Shop Now
"
      />
      <BookHead head="Books" />
    </Box>
  );
};

export default BooksPage;
