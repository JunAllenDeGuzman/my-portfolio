import React from "react";
import { Typography, Paper, Chip, Stack } from "@mui/material";

const Skills: React.FC = () => {
  const skills: string[] = [
    "HTML", "CSS", "ASP.NET Web API Core", "ASP.NET MVC", "ReactJs", "AngularJs",
    "MySQL", "Microsoft Azure", "Azure DevOps", "CI/CD pipelines", "SQLServer",
    "Jenkins", "Open Project", "Source Tree", "NextJs", "Docker"
  ];

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={1} gap={1}>
        {skills.map(skill => (
          <Chip key={skill} label={skill} color="primary" />
        ))}
      </Stack>
    </Paper>
  );
};

export default Skills;
