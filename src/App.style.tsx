import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

export const AppBackground = styled(Box)({
  minHeight: "100vh",
  background:
    "radial-gradient(1200px circle at 20% -10%, rgba(77,208,225,0.08), transparent 40%), " +
    "radial-gradient(1000px circle at 100% 0%, rgba(255,64,129,0.06), transparent 35%), " +
    "linear-gradient(180deg, #0b0f14 0%, #0b0f14 100%)",
});

export const AppContainer = styled(Container)({
  paddingTop: 16,
  paddingBottom: 16,
});
