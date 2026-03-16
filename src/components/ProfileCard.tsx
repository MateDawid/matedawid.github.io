import * as React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Link,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

export const ProfileCard: React.FC = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          sx={{ width: 112, height: 112 }}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
          alt="Profile"
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Dawid
          </Typography>
                  <Stack direction="row" spacing={0.5}>
          <Tooltip title="Download Resume">
            <IconButton component={Link} href="/resume.pdf">
              <DownloadIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub">
            <IconButton
              component={Link}
              href="https://github.com/your-username"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              component={Link}
              href="https://www.linkedin.cm/in/your-handle"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Gmail">
            <IconButton component={Link} href="mailto:your.name@gmail.com">
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);