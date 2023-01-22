import {
  Badge,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BookSkeleton = () => {
  return (
    <Flex alignItems="center">
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Skeleton height="10rem" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Skeleton width="170px" />
              <Stack mt="1rem">
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default BookSkeleton;
