import { Card, CardContent, Stack, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { gradientText } from "./utils";
import { about_card_data as data } from "../data";

export const AboutCard: React.FC = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <BoltIcon sx={{ color: "#ff5ea8" }} />
        <Typography variant="h6" sx={gradientText("#ff5ea8", "#ffb84a")}>
          About me
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.7 }}
      >
        {data.summary}
      </Typography>
    </CardContent>
  </Card>
);
