import { Box, Divider, Image } from "@chakra-ui/react";
import React from "react";
import NavOffers from "../Routes/NavOffers";
import HomeCarosual from "./HomeCarosual";
import LinksHint from "./LinksHint";
import NewBook from "./NewBook";
import NewPaperBack from "./NewPaperBack";
import OfferInfo from "./OfferInfo";
import Subscribe from "./Subscribe";
import banner from "../images/banner.png";

const Home = () => {
  return (
    <Box>
      <OfferInfo banner={banner} />

      <NavOffers msg=" Free Shipping on Orders of $40 or More" />
      <HomeCarosual />
      <LinksHint />
      <NewBook head="New This Week" page="1" />
      <Box w="85%" m="auto">
        <Image src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/09/25653_BB-B_50_Off_Sale_12-28b.jpg" />
      </Box>
      <NewPaperBack />
      <NewBook head="B&N Top 100 Books" page="2" />
      <NewBook head="50% Off Thousands of Books" page="4" />
      <NewBook head="50% Off Thousands of Books" page="3" />
      <NewBook
        head="Buy One, Get One 50% Off Books for Every Reader"
        page="2"
      />

      <LinksHint />
      <Subscribe />
    </Box>
  );
};

export default Home;
