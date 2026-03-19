import * as React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import { gradientText } from "./utils";

export const EducationCard: React.FC = () => (
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
    </CardContent>
  </Card>
);
