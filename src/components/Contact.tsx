import React from "react";
import { Typography, Paper, Link, Stack } from "@mui/material";

const Contact: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    <Stack spacing={1}>
      <Typography>Email: junallendeguzman@gmail.com</Typography>
      <Typography>Phone: 09661837654</Typography>
      <Typography>Location: Cebu City</Typography>
    </Stack>
  </Paper>
);

export default Contact;
