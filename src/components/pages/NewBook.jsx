import {
  Box,
  Center,
  Icon,
  Flex,
  Text,
  Divider,
  Image,
  color,
  Button,
} from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function NewBook({ head, page }) {
  const [data, setData] = useState([]);
  const settings = {
    className: "",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  let icon = {
    fontSize: "3rem",
  };
  useEffect(() => {
    newBook();
  }, []);
  const newBook = async () => {
    const res = await axios.get(
      ` http://localhost:3000/books?_page=${page}&_limit=10`
    );
    // console.log(res.data);
    setData(res.data);
  };

  return (
    <Box w="80%" m="auto">
      <Flex direction="column">
        <Flex justifyContent="space-between" pt="2rem" pb="1rem" size="2rem">
          <Text fontSize="2rem">{head}</Text>
          <Link>See All</Link>
        </Flex>

        <Slider {...settings}>
          {data?.map((el, i) => {
            return (
              <div key={i + 1}>
                <Box mb="1rem">
                  <Link to="/login">
                    <Image src={el.image} fit />
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
                  </Link>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Flex>
    </Box>
  );
}
