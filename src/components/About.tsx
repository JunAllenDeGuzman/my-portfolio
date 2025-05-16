import React from "react";
import { Typography, Paper } from "@mui/material";

const About: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" color="text.secondary" paragraph>
      A highly skilled and adaptable Software Engineer with a passion for designing and
      developing robust, scalable, and innovative software solutions. Seeking a challenging role
      in a dynamic team to contribute to cutting-edge projects and deliver exceptional user experiences.
    </Typography>
  </Paper>
);

export default About;
