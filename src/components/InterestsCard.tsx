import { Typography, CardContent, Stack } from "@mui/material";
import { gradientText } from "./utils";
import StarIcon from "@mui/icons-material/Star";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { interests_card_data as data } from "../data";
import { StyledInterestsCard, InterestIconCircle } from "./InterestsCard.style";

const iconMap: Record<string, React.ReactElement> = {
  SportsEsports: <SportsEsportsIcon sx={{ color: "#00bcd4", fontSize: 36 }} />,
  MenuBook: <MenuBookIcon sx={{ color: "#00bcd4", fontSize: 36 }} />,
  FitnessCenter: <FitnessCenterIcon sx={{ color: "#00bcd4", fontSize: 36 }} />,
};

export const InterestsCard: React.FC = () => (
  <StyledInterestsCard>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <StarIcon sx={{ color: "#00bcd4" }} />
        <Typography variant="h6" sx={gradientText("#00bcd4", "#4dd0e1")}>
          Interests
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {data.interests.map((interest) => (
          <Stack key={interest.name} direction="row" spacing={2}>
            <InterestIconCircle>
              {iconMap[interest.icon] ?? (
                <StarIcon sx={{ color: "#00bcd4", fontSize: 36 }} />
              )}
            </InterestIconCircle>
            <div>
              <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
                {interest.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, textAlign: "justify" }}
              >
                {interest.description}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </StyledInterestsCard>
);
