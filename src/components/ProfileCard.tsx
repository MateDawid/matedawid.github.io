import * as React from "react";
import {
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import PhoneIcon from "@mui/icons-material/Phone";
import { profile_card_data as data } from "../data";

import { gradientText } from "./utils";
import {
  StyledProfileCard,
  MainBox,
  ProfileAvatar,
  InfoBox,
  IconsBox,
} from "./ProfileCard.style";

export const ProfileCard: React.FC = () => {
  return (
    <StyledProfileCard>
      <CardContent>
        <MainBox>
          {data.image && <ProfileAvatar src={data.image} alt="Profile" />}
          <InfoBox>
            <Typography variant="h6" sx={gradientText("#00E676", "#4dd0e1")}>
              {data.name}
            </Typography>
            {data.position && (
              <Typography sx={{ fontWeight: 600 }}>
                {data.position}
              </Typography>
            )}
            {data.location && (
              <Typography color="text.secondary">{data.location}</Typography>
            )}
            <IconsBox>
              <Tooltip title="Download Resume">
                <IconButton
                  component={Link}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
              {data.contact?.email && (
                <Tooltip title={data.contact.email}>
                  <IconButton
                    component={Link}
                    href={`mailto:${data.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
              )}
              {data.contact?.phone && (
                <Tooltip title={data.contact.phone}>
                  <IconButton
                    component={Link}
                    href={`tel:${data.contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneIcon />
                  </IconButton>
                </Tooltip>
              )}
              {data.contact?.linkedin && (
                <Tooltip title="LinkedIn">
                  <IconButton
                    component={Link}
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              )}
              {data.contact?.github && (
                <Tooltip title="GitHub">
                  <IconButton
                    component={Link}
                    href={data.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              )}
            </IconsBox>
          </InfoBox>
        </MainBox>
      </CardContent>
    </StyledProfileCard>
  );
};
