import { Card, CardContent, Stack, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { gradientText } from "./utils";

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
                I write about SQL, performance engineering, and developer workflow. I
                enjoy designing learning tools that feel like games. Below are some
                projects, utilities, and places to connect.
            </Typography>
        </CardContent>
    </Card>
);