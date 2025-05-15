import React from "react";
import { Typography, Paper } from "@mui/material";

const Certificates: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Certificates
    </Typography>
    <Typography variant="body1">
      AZ-900 Azure Fundamentals
    </Typography>
  </Paper>
);

export default Certificates;
