import { styled } from "@mui/material/styles";
import { Card, Box, Avatar } from "@mui/material";

export const StyledProfileCard = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderColor: "rgba(0,230,118,0.25)",
  background:
    "radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)",
}));

export const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 16,
  alignItems: "center",
  justifyContent: "space-around",
  [theme.breakpoints.up("sm")]: {
    flexWrap: "nowrap",
  },
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const ProfileAvatar = styled(Avatar)({
  width: 112,
  height: 112,
});

export const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const IconsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: 8,
});
