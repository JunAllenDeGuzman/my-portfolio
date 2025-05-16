import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import References from "./components/References";
import Contact from "./components/Contact";
import Store from "./components/Store";
import { Container, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "../src/components/context/CartContext";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
          secondary: { main: "#ac3b61" },
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <AnimatedRoutes />
          </Container>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
