import { useEffect } from "react";
import GetData from "./API/GetData";
import Navbar from "./components/Routes/Navbar";
import { Box, Divider } from "@chakra-ui/react";
import AllRoutes from "./components/Routes/AllRoutes";
import Footer from "./components/Routes/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Divider />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
