import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Typography, IconButton, Switch, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Certificates", path: "/certificates" },
  { label: "References", path: "/references" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const currentTab = navItems.findIndex(item => item.path === location.pathname);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Jun Allen P. De Guzman
        </Typography>

        <Tabs
          value={currentTab === -1 ? false : currentTab}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="navigation tabs"
          sx={{ flexGrow: 1 }}
        >
          {navItems.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              component={Link}
              to={item.path}
              sx={{ textTransform: "none" }}
            />
          ))}
        </Tabs>

        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" />
          <IconButton
            color="inherit"
            aria-label="GitHub"
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener"
          >
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="LinkedIn"
            href="https://linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener"
          >
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
