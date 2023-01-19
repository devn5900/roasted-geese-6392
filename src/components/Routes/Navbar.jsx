import {
  Box,
  Center,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarChild from "./NavbarChild";
import NavIcon from "./NavIcon";
import NavInfo from "./NavInfo";
import NavOffers from "./NavOffers";

const Navbar = () => {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    let data = NavbarChild();
    setNav(data);
  }, []);

  // console.log(nav);
  return (
    <Box pb={2}>
      <NavOffers msg=" Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      <NavInfo />
      <NavIcon />
      <Flex>
        <Spacer />
        {nav?.map((el, i) => {
          return (
            <Menu key={i + 1}>
              <Link to="/allbooks?_page=1">
                {" "}
                <MenuButton trigger="hover">{el?.label}</MenuButton>
              </Link>
              <Spacer />
              <Center>
                <Divider
                  orientation="vertical"
                  variant={"solid"}
                  borderColor="black"
                  borderWidth="2"
                  colorScheme={"blackAlpha"}
                />
              </Center>
              <Spacer />
              <MenuDivider />

              <MenuList borderRadius="none" p={2}>
                <Flex>
                  {el?.data?.map((chil, j) => {
                    return (
                      <MenuOptionGroup
                        key={j + 1}
                        bg="gray.200"
                        p={2}
                        title={chil?.label}
                      >
                        {chil?.child?.map((childData, k) => {
                          return <MenuItem key={k + 1}>{childData}</MenuItem>;
                        })}
                      </MenuOptionGroup>
                    );
                  })}
                </Flex>
              </MenuList>
            </Menu>
          );
        })}
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Navbar;
