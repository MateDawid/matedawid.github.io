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
  Stack
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BoltIcon from "@mui/icons-material/Bolt";
import { ProfileCard, AboutCard, SkillsCard } from "./components";
import { theme } from "./theme";
import {glow, gradientText } from "./components/utils";

// -------------------- DATA --------------------
const skills_mini = [
  { label: "Python", color: "#ff5ea8" },
  { label: "Django", color: "#ff8f6b" },
  { label: "DRF", color: "#ffb84a" },
  { label: "TypeScript", color: "#c77dff" },
];
// -------------------- COMPONENTS --------------------




const ExperienceCard: React.FC = () => (
  <Card
    sx={{
      borderColor: "rgba(255,64,129,0.25)",
      background:
        "radial-gradient(800px circle at 0% 0%, rgba(255,64,129,0.10), transparent 40%), rgba(255,255,255,0.02)",
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <BoltIcon sx={{ color: "#ff5ea8" }} />
        <Typography variant="h6" sx={gradientText("#ff5ea8", "#ffb84a")}>
          Experience
        </Typography>
      </Stack>

      <Stack spacing={2}>
        {/* JOB 1 */}
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 110,
              height: 150,
              borderRadius: 2,
              background:
                "linear-gradient(145deg, rgba(255,64,129,0.35), rgba(77,208,225,0.25))",
              border: "1px solid rgba(255,255,255,0.10)",
              ...glow("#ff4081", 0.2),
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
              ING Hubs
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1, mt: 1 }}
              flexWrap="wrap"
            >
              {skills_mini.map((u, i) => (
                <Chip
                  key={i}
                  label={u.label}
                  sx={{
                    borderColor: `${u.color}55`,
                    backgroundColor: `${u.color}1a`,
                    color: u.color,
                    mr: 1,
                    mb: 1,
                  }}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 420 }}>
              Bla bla about job
            </Typography>
          </Box>
        </Stack>

        {/* JOB 2 */}
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 110,
              height: 150,
              borderRadius: 2,
              background:
                "linear-gradient(145deg, rgba(255,64,129,0.35), rgba(77,208,225,0.25))",
              border: "1px solid rgba(255,255,255,0.10)",
              ...glow("#ff4081", 0.2),
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
              ING Hubs
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1, mt: 1 }}
              flexWrap="wrap"
            >
              {skills_mini.map((u, i) => (
                <Chip
                  key={i}
                  label={u.label}
                  sx={{
                    borderColor: `${u.color}55`,
                    backgroundColor: `${u.color}1a`,
                    color: u.color,
                    mr: 1,
                    mb: 1,
                  }}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 420 }}>
              Bla bla about job
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

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
