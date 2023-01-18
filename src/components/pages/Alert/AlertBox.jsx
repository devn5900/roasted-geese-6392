import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const AlertBox = ({ status, msg }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default AlertBox;
