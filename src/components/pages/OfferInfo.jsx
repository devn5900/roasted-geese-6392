import { Box, Image } from "@chakra-ui/react";
import React from "react";
const OfferInfo = ({ banner }) => {
  return (
    <Box pt="0.2rem" pb="0.2rem">
      <Image src={banner} />
    </Box>
  );
};

export default OfferInfo;
