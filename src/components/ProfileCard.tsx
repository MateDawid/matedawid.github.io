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
import { gradientText } from "./utils";

export const ProfileCard: React.FC = () => (
  <Card
    sx={{
      height: "100%",
      borderColor: "rgba(0,230,118,0.25)",
      background:
        "radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)",
    }}
  >
    <CardContent>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
        {data.image && (
          <Avatar
            sx={{ width: 112, height: 112 }}
            src={data.image}
            alt="Profile"
          />
        )}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
          <Typography variant="h6" sx={gradientText("#00E676", "#4dd0e1")}>{data.name}</Typography>
          {data.position && (
            <Typography variant="subtitle1" color="text.secondary">
              {data.position}
            </Typography>
          )}
          {data.location && (
            <Typography sx={{ fontWeight: 600 }}>{data.location}</Typography>
          )}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", gap: 1, mt: 1 }}>
            <Tooltip title="Download Resume">
              <IconButton component={Link} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon />
              </IconButton>
            </Tooltip>
            {data.contact?.email && (
              <Tooltip title={data.contact.email}>
                <IconButton component={Link} href={`mailto:${data.contact.email}`} target="_blank" rel="noopener noreferrer">
                  <EmailIcon />
                </IconButton>
              </Tooltip>
            )}
            {data.contact?.phone && (
              <Tooltip title={data.contact.phone}>
                <IconButton component={Link} href={`tel:${data.contact.phone}`} target="_blank" rel="noopener noreferrer">
                  <PhoneIcon />
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
            {data.contact?.github && (
              <Tooltip title="GitHub">
                <IconButton component={Link} href={data.contact.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);
