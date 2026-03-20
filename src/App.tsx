import * as React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Box,
} from "@mui/material";
import {
  ProfileCard,
  AboutCard,
  SkillsCard,
  ExperienceCard,
  ProjectsCard,
  EducationCard,
} from "./components";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(1200px circle at 20% -10%, rgba(77,208,225,0.08), transparent 40%), " +
            "radial-gradient(1000px circle at 100% 0%, rgba(255,64,129,0.06), transparent 35%), " +
            "linear-gradient(180deg, #0b0f14 0%, #0b0f14 100%)",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Grid container spacing={2} alignItems="stretch">
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
              <ProfileCard />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
              <AboutCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box>
                <SkillsCard />
              </Box>
            </Grid>
            <Grid size={12}>
              <Box>
                <ExperienceCard />
              </Box>
            </Grid>
            <Grid size={12}>
              <Box>
                <ProjectsCard />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box>
                <EducationCard />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
