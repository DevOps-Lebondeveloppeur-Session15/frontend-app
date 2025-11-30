import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';

import CreatePage from './pages/CreatePage';
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';

function app() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
<Navbar />
            <Routes>
  <Route path="/" element={<HomePage />} />        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}
// DATABASED_Password=45&é4oijkezfçà"56d15&é&é15f"
// SECRET_TOKEN=12aa12aa56zertyppdjdsecretkeyhgfjdvgjh
export default app;
