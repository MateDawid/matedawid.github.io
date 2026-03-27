import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const StyledEducationCard = styled(Card)({
  borderColor: "rgba(92,107,192,0.25)",
  background:
    "radial-gradient(800px circle at 0% 0%, rgba(92,107,192,0.10), transparent 40%), rgba(255,255,255,0.02)",
});

export const UniversityImageBox = styled(Box)({
  width: 72,
  height: 72,
  minWidth: 72,
  minHeight: 72,
  borderRadius: "50%",
  flexShrink: 0,
  background: "rgba(255,255,255,0.92)",
  border: "1px solid rgba(255,255,255,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const UniversityImage = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}) as typeof Box;
