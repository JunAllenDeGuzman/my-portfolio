import React from "react";
import { Typography, Paper, Box, List, ListItem, ListItemText } from "@mui/material";

const Experience: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Work Experience
    </Typography>
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        Palawan Group of Companies (Apr 2024 – Present)
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Build CI/CD pipeline using Jenkins and deploy in Docker" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Create Technical Documents, C4 model and sequence diagram" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Develop REST API using ASP.NET Web API Core" />
        </ListItem>
      </List>
    </Box>
    <Box>
      <Typography variant="h6" gutterBottom>
        Accenture INC. (Apr 2021 – Feb 2024)
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Defined and reviewed requirements and use cases" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Designed and built application architecture" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Participated in code reviews and defect fixing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Created technical and operational documentation" />
        </ListItem>
      </List>
    </Box>
  </Paper>
);

export default Experience;
