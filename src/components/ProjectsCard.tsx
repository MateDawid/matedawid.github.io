import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import { gradientText, glow } from "./utils";
import TerminalIcon from "@mui/icons-material/Terminal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const ProjectsCard: React.FC = () => (
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
