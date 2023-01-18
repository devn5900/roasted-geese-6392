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
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContextProvider";
import AlertBox from "../Alert/AlertBox";
const LoginPage = ({ isOpen, onClose }) => {
  const { isAuth, setIsAuth, logged, setLogged } = useContext(AuthContext);
  const [err, setErr] = useState(false);
  const singRef = useRef({ email: "", password: "" });
  const toast = useToast();

  const inputData = (e) => {
    singRef.current[e.target.name] = e.target.value;
  };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = singRef.current;
    if (email == "" || password == "") {
      setErr(true);
    } else {
      setErr(false);
      console.log(singRef.current);
      setLogged(singRef.current);
      setIsAuth(true);
      onClose();
      return toast({
        title: "Login Sucessfully.",
        description: "",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={login}>
          <ModalBody pb={6}>
            {err ? (
              <AlertBox status="error" msg="All Fields are Required !" />
            ) : (
              ""
            )}
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={inputData}
                name="email"
                placeholder="Last name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={inputData}
                name="password"
                placeholder="Last name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#3E5962" type="submit" color="white" mr={3}>
              Log In
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default LoginPage;
