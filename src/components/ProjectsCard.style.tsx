import { styled } from "@mui/material/styles";
import { Box, Card, Link, Typography } from "@mui/material";

export const StyledProjectsCard = styled(Card)({
  borderColor: "rgba(0,230,118,0.25)",
  background:
    "radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.10), transparent 40%), rgba(255,255,255,0.02)",
});

export const ProjectTitle = styled(Typography)({
  fontWeight: 800,
  fontSize: 18,
});

export const ProjectTitleLink = styled(Link)({
  color: "inherit",
});

export const ProjectImage = styled(Box)({
  width: "100%",
  objectFit: "cover",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.08)",
  display: "block",
}) as typeof Box;

export const ProjectDescription = styled(Typography)({
  textAlign: "justify",
  whiteSpace: "pre-line",
  lineHeight: 1.7,
});

export const UrlIconLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  color: "#4dd0e1",
});
