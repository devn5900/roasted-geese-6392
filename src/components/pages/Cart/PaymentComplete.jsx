import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { CartContext } from "../../context/CartContextProvider";
import { useEffect } from "react";

export default function PaymentComplete() {
  const { isAuth } = useContext(AuthContext);
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    resetCart();
  }, []);
  if (!isAuth) {
    return <Navigate to="/cart" />;
  }
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your order is completed!
      </Heading>
      <Text color={"gray.500"}>
        You will be receiving a conformation email with order details.
      </Text>
      <Link to="/">
        {" "}
        <Button mt="0.7rem" colorScheme="teal" variant="outline">
          Explore more ..
        </Button>
      </Link>
    </Box>
  );
}
