import { Box, Center, Icon, Flex, Text, Divider } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import {
  FaGift,
  FaBook,
  FaFileAudio,
  FaPenNib,
  FaMobileAlt,
  FaChartLine,
  FaPeopleCarry,
} from "react-icons/fa";
export default class LinksHint extends Component {
  render() {
    const settings = {
      className: "",
      centerMode: false,
      infinite: true,
      centerPadding: "0",
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    let icon = {
      fontSize: "3rem",
      color: "#3E5962",
    };
    return (
      <Box w="80%" m="auto">
        <Flex direction="column">
          <Center>
            <Text pt="3rem" pb="2rem">
              FIND YOUR PLACE AT B&N'S ONLINE BOOKSTORE Over 5 million books
              ready to ship, 3.6 million eBooks and 300,000 audiobooks to
              download right now! Curbside pickup available in most stores!
            </Text>
          </Center>
          <Divider
            orientation="horizontal"
            borderWidth="1"
            borderColor="gray"
            mb="2rem"
          />
          <Slider {...settings}>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaGift} {...icon}></Icon>
                <Text>GIFT CARDS</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaBook} {...icon}></Icon>
                <Text>NEW RELEASES</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaFileAudio} {...icon}></Icon>
                <Text>AUDIO BOOKS</Text>
              </Flex>
            </div>

            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaPenNib} {...icon}></Icon>
                <Text>SIGNED EDITIONS</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaMobileAlt} {...icon}></Icon>
                <Text>C & B APPS</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaChartLine} {...icon}></Icon>
                <Text>BESTSELLERS</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaPeopleCarry} {...icon}></Icon>
                <Text>COMING SOON</Text>
              </Flex>
            </div>
            <div>
              <Flex direction="column" alignItems="center">
                <Icon as={FaMobileAlt} {...icon}></Icon>
                <Text>C & B APPS</Text>
              </Flex>
            </div>
          </Slider>
          <Divider
            orientation="horizontal"
            borderWidth="1"
            borderColor="gray"
            mt="2rem"
            mb="3rem"
          />
        </Flex>
      </Box>
    );
  }
}
