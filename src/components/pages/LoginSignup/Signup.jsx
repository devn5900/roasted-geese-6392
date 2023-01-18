import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SignupPage from "./SignupPage";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="red" size="sm" variant="outline">
        Sign up
      </Button>
      <SignupPage isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Signup;
