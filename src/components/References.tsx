import React from "react";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

const References: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Character References
    </Typography>
    <List dense>
      <ListItem>
        <ListItemText primary="Mel Christian D. Salvador – Application Systems Engineer at Fujitsu – clovesalvador123@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Angeli May Optina – Support Engineer – amoptina1@gmail.com" />
      </ListItem>
    </List>
  </Paper>
);

export default References;
