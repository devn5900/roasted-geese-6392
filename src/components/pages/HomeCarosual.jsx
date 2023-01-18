import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = useState([]);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "His Words. His Story.",
      text: "With raw & unflinching honesty, this landmark memoir is full of revelation, self-examination, and hard-won wisdom about the eternal power of love over grief.",
      image:
        "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/12/26/25533_Quote_A3_Spare_12-26.jpg",
      right: "40%",
      color: "black",
    },
    {
      title: "Coming Soon From Kerri Maniscalco ",
      text: "Together, Envy and Camilla must embark on a perilous journey through the Shifting Isles. The most dangerous trap of all: falling in love. ",
      image:
        "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/11/25642_Quote_A3_Kerri-Maniscalco_01-11.jpg",
      right: "-50%",
      color: "black",
    },
    {
      title: "Chain of Thorns",
      text: "James and Cordelia must save London; if they fail, they may lose everything—even their souls.",
      image:
        "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/17/25643_Quote_A3_Chain-of-Thorns_01-17.jpg",
      right: "40%",
      color: "white",
    },
    {
      title: "New From Grady Hendrix",
      text: "Some houses don’t want to be sold and this home has other plans...",
      image:
        "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/10/25641_Quote_A3_Haunted_House_01-10.jpg",
      right: "-50%",
      color: "white",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        color="white"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        color="white"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="sm" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="30%"
                right={card.right}
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color={card.color}
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color={card.color}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
