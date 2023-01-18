import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Icon,
  Button,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiOutlineEnvironment, AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import Login from "../pages/LoginSignup/Login";
import Signup from "../pages/LoginSignup/Signup";
import LoginSignup from "../pages/LoginSignup/Signup";
const NavInfo = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  let text = {
    fontSize: "12px",
    fontWeight: "500",
    color: "#3E5962",
  };
  const logOut = () => {
    setIsAuth(false);
  };
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      pt={4}
      pb={4}
      justifyContent="space-around"
    >
      <Box>
        <Flex gap={2}>
          <Icon as={AiOutlineEnvironment}></Icon>
          <Text {...text}>STORES & EVENTS</Text>
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>
          <Text {...text}>BLOG & POST</Text>{" "}
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>
          <Text {...text}>MEMBERSHIP</Text>
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>{" "}
          <Text {...text}>COUPONS & DEALS</Text>
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>{" "}
          <Text {...text}>BESTSELLERS</Text>
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>{" "}
          <Text {...text}>GIFT CARDS</Text>
        </Flex>
      </Box>
      <Box>
        <Flex alignItems="center">
          <Popover
            trigger="hover"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          >
            <PopoverTrigger>
              <Flex alignItems="center">
                <Icon
                  as={AiOutlineUser}
                  border="1px"
                  mr="2"
                  borderRadius={"full"}
                ></Icon>
                <Text mr={2}>My Account</Text>
                {isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                {!isAuth ? (
                  <Stack direction="row" spacing={4} align="center">
                    <Signup />
                    <Login />
                  </Stack>
                ) : (
                  <Stack direction="row" spacing={4} align="center">
                    <Image
                      borderRadius="full"
                      boxSize="3rem"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                    <Text>Devesh Kumar Mishra</Text>
                    <Button
                      onClick={logOut}
                      colorScheme="blue"
                      size="sm"
                      variant="outline"
                    >
                      Log Out
                    </Button>
                  </Stack>
                )}
              </PopoverHeader>
              <PopoverBody>
                <Stack direction="column" spacing={4}>
                  <Link>Profile</Link>
                  <Link>My Order</Link>
                  <Link>Address Book</Link>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Center>
            <Divider
              orientation="vertical"
              variant={"solid"}
              borderColor="black"
              borderWidth="2"
              colorScheme={"blackAlpha"}
            />
          </Center>

          <Flex alignItems="center">
            <Icon as={FaRegHeart} mr="2"></Icon>
            <Link {...text} mr="2">
              Wish List
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavInfo;
