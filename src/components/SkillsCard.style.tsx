import { styled } from "@mui/material/styles";
import { Card, Box } from "@mui/material";

export const StyledSkillsCard = styled(Card)({
  borderColor: "rgba(255,193,7,0.25)",
  background:
    "radial-gradient(800px circle at 0% 0%, rgba(255,193,7,0.10), transparent 40%), rgba(255,255,255,0.02)",
});

export const SkillIconCircle = styled(Box)({
  width: 72,
  height: 72,
  borderRadius: "50%",
  background: "rgba(255,193,7,0.12)",
  border: "1px solid rgba(255,193,7,0.30)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

export const SkillIcon = styled(Box)({
  width: 48,
  height: 48,
  objectFit: "contain",
}) as typeof Box;
