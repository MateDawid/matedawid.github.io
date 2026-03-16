import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { gradientText, glow } from "./utils";
import BoltIcon from "@mui/icons-material/Bolt";

// -------------------- DATA --------------------
const skills_mini = [
  { label: "Python", color: "#ff5ea8" },
  { label: "Django", color: "#ff8f6b" },
  { label: "DRF", color: "#ffb84a" },
  { label: "TypeScript", color: "#c77dff" },
];
// -------------------- COMPONENTS --------------------

export const ExperienceCard: React.FC = () => (
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
