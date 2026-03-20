import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledAboutCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderColor: "rgba(206,147,216,0.25)",
  background:
    "radial-gradient(800px circle at 100% 0%, rgba(206,147,216,0.12), transparent 40%), rgba(255,255,255,0.02)",
}));
