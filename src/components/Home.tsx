import React from "react";
import { Typography, Paper, Button, Stack, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home: React.FC = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <Paper elevation={3} sx={{ p: 6, textAlign: "center" }}>
      <Stack spacing={3} alignItems="center">
        <Avatar
          alt="Jun Allen P. De Guzman"
          src="/profile.jpg"  // add your profile picture in public folder with this name
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="h3" gutterBottom>
          Jun Allen P. De Guzman
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Software Engineer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600 }}>
          Building scalable, robust software solutions with passion and precision.
        </Typography>
        <Button variant="contained" color="primary" href="/Resume.pdf" download>
          Download Resume
        </Button>
        <Stack direction="row" spacing={2}>
          <IconButton
            aria-label="GitHub"
            href="http://github.com/"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="Email"
            href="https://gmail.com"
            target="_blank"
            rel="noopener"
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  </motion.div>
);

export default Home;
