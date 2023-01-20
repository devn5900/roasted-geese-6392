import { useEffect } from "react";
import GetData from "./API/GetData";
import Navbar from "./components/Routes/Navbar";
import { Box, Divider } from "@chakra-ui/react";
import AllRoutes from "./components/Routes/AllRoutes";
import Footer from "./components/Routes/Footer";
import CartContextProvider from "./components/context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Box>
        <Navbar />
        <Divider />
        <AllRoutes />
        <Footer />
      </Box>
    </CartContextProvider>
  );
}

export default App;
