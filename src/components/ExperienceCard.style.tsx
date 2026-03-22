import { styled } from "@mui/material/styles";
import { Card, Box } from "@mui/material";

export const StyledExperienceCard = styled(Card)({
  borderColor: "rgba(255,64,129,0.25)",
  background:
    "radial-gradient(800px circle at 0% 0%, rgba(255,64,129,0.10), transparent 40%), rgba(255,255,255,0.02)",
});

export const CompanyImageBox = styled(Box)({
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

export const CompanyImage = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}) as typeof Box;
