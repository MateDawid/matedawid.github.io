import * as React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  ProfileCard,
  AboutCard,
  SkillsCard,
  ExperienceCard,
} from "./components";
import { theme } from "./theme";
import { glow, gradientText } from "./components/utils";

const ProjectsCard: React.FC = () => (
  <Card
    sx={{
      borderColor: "rgba(0,230,118,0.25)",
      background:
        "radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)",
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <TerminalIcon sx={{ color: "#00E676" }} />
        <Typography variant="h6" sx={gradientText("#00E676", "#4dd0e1")}>
          Projects
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        Try queries against sandbox datasets. No setup required.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2, px: 2.5, ...glow("#00E676", 0.22) }}
        endIcon={<PlayArrowIcon />}
      >
        Query Demos
      </Button>
    </CardContent>
  </Card>
);

const EducationCard: React.FC = () => (
  <Card
    sx={{
      borderColor: "rgba(0,230,118,0.25)",
      background:
        "radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)",
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <TerminalIcon sx={{ color: "#00E676" }} />
        <Typography variant="h6" sx={gradientText("#00E676", "#4dd0e1")}>
          Education
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        Try queries against sandbox datasets. No setup required.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2, px: 2.5, ...glow("#00E676", 0.22) }}
        endIcon={<PlayArrowIcon />}
      >
        Query Demos
      </Button>
    </CardContent>
  </Card>
);

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
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <ProfileCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <Box id="about">
                <AboutCard />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box id="skills">
                <SkillsCard />
              </Box>
            </Grid>
            <Grid size={12}>
              <Box id="experience">
                <ExperienceCard />
              </Box>
            </Grid>
            <Grid size={12}>
              <Box id="projects">
                <ProjectsCard />
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Box id="education">
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
