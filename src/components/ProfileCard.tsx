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
import PhoneIcon from "@mui/icons-material/Phone";
import { profile_card_data as data } from "../data";

export const ProfileCard: React.FC = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        {data.image && (
        <Avatar
          sx={{ width: 112, height: 112 }}
          src={data.image}
          alt="Profile"
        />)}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {data.name}
          </Typography>
          {data.position && (
            <Typography variant="subtitle1" color="text.secondary">
              {data.position}
            </Typography>
          )}
          {data.location && (
            <Typography sx={{ fontWeight: 600 }}>{data.location}</Typography>
          )}
          <Stack direction="row" spacing={0.5}>
            <Tooltip title="Download Resume">
              <IconButton component={Link} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            {data.contact?.github && (
              <Tooltip title="GitHub">
                <IconButton component={Link} href={data.contact.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            )}
            {data.contact?.linkedin && (
              <Tooltip title="LinkedIn">
                <IconButton component={Link} href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            )}
            {data.contact?.email && (
              <Tooltip title={data.contact.email}>
                <IconButton component={Link} href={`mailto:${data.contact.email}`}>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            )}
            {data.contact?.phone && (
              <Tooltip title={data.contact.phone}>
                <IconButton component={Link} href={`tel:${data.contact.phone}`}>
                  <PhoneIcon />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);
