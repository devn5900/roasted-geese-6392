import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function SinglePageLoader() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Skeleton height="50%" width="100%" />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Skeleton height="50px" width="70%" />
            <Skeleton height="30px" width="40%" mt="1rem" />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Skeleton height="30px" width="100%" mt="1rem" />
              <Skeleton height="100px" width="100%" mt="1rem" />
            </VStack>
            <Box>
              <Skeleton height="30px" width="30%" mt="1rem" />

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>{" "}
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>
                  <ListItem>
                    {" "}
                    <Skeleton height="30px" width="30%" mt="1rem" />
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Skeleton height="70px" width="100%" mt="1rem" />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
