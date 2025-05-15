import React from "react";
import { Typography, Paper } from "@mui/material";

const Education: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Education
    </Typography>
    <Typography>University of Cebu – Main Cebu (2015 - 2020)</Typography>
    <Typography>Bachelor of Science in Information Technology</Typography>
  </Paper>
);

export default Education;
