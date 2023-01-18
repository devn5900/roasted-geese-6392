import React, { useContext, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Alert,
  AlertIcon,
  Toast,
  useToast,
} from "@chakra-ui/react";
import AlertBox from "../Alert/AlertBox";
import { AuthContext } from "../../context/AuthContextProvider";
const SignupPage = ({ isOpen, onClose }) => {
  const { setUserData } = useContext(AuthContext);
  const signRef = useRef({
    name: "",
    email: "",
    password: "",
  });
  const toast = useToast();
  const [err, setErr] = useState(false);
  const inputData = (e) => {
    signRef.current[e.target.name] = e.target.value;
  };
  const signUp = (e) => {
    e.preventDefault();
    const { name, email, password } = signRef.current;
    if (name == "" || email == "" || password == "") {
      setErr(true);
    } else {
      console.log(name, email, password);
      setErr(false);
      setUserData({ name, email, password });
      signRef.current = {
        name: "",
        email: "",
        password: "",
      };
      onClose();
      return toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={signUp}>
          <ModalBody pb={6}>
            {err ? (
              <AlertBox status="error" msg="All Fields are Required !" />
            ) : (
              ""
            )}

            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={inputData}
                placeholder="Name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={inputData}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={inputData}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#3E5962" type="submit" color="white" mr={3}>
              Sign up
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default SignupPage;
