import * as React from "react";
import { ThemeProvider, CssBaseline, Grid, Stack } from "@mui/material";
import {
  ProfileCard,
  AboutCard,
  SkillsCard,
  InterestsCard,
  ExperienceCard,
  ProjectsCard,
  EducationCard,
} from "./components";
import { theme } from "./theme";
import { AppBackground, AppContainer } from "./App.style";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBackground>
        <AppContainer maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch">
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
              <ProfileCard />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
              <AboutCard />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <ExperienceCard />
                </Grid>
                <Grid size={12}>
                  <ProjectsCard />
                </Grid>
                <Grid size={12}>
                  <EducationCard />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <SkillsCard />
                <InterestsCard />
              </Stack>
            </Grid>
          </Grid>
        </AppContainer>
      </AppBackground>
    </ThemeProvider>
  );
};

export default App;
