import { Box, Link, Typography } from "@mui/material";
import { SectionTitle } from "../../../components";

export function ProjectsSubsection() {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>

      {/* Project 1 */}
      <Box mb={3}>
        <Typography fontWeight={600}>
          <Link href="#">My First Project</Link>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Short summary about my first project
        </Typography>

        <ul>
          <li>First Highlight of Project One</li>
          <li>Second Highlight of Project One</li>
          <li>Third Highlight of Project One</li>
        </ul>
      </Box>
    </>
  );
}
