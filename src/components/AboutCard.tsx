import { CardContent, Typography } from "@mui/material";
import { StyledAboutCard } from "./AboutCard.style";
import PersonIcon from "@mui/icons-material/Person";
import { gradientText } from "./utils";
import { about_card_data as data } from "../data";

export const AboutCard: React.FC = () => (
  <StyledAboutCard>
    <CardContent
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" sx={gradientText("#ce93d8", "#ff80ab")}>
        <PersonIcon sx={{ color: "#ce93d8", verticalAlign: "middle", mr: 1 }} />
        About me
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.7, mt: 2, textAlign: "justify" }}
      >
        {data.summary}
      </Typography>
    </CardContent>
  </StyledAboutCard>
);
