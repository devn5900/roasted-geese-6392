import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginPage from "./LoginPage";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" size="sm" variant="outline">
        Log in
      </Button>
      <LoginPage isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Login;
