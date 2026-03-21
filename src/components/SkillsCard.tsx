import { Typography, CardContent, Stack } from "@mui/material";
import { gradientText } from "./utils";
import BuildIcon from "@mui/icons-material/Build";
import { skills_card_data as data } from "../data";
import {
  StyledSkillsCard,
  SkillIconCircle,
  SkillIcon,
} from "./SkillsCard.style";

type SkillItem = {
  name: string;
  description: string;
  image: string;
};

const SkillRow: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <Stack direction="row" spacing={2}>
    <SkillIconCircle>
      <SkillIcon component="img" src={skill.image} alt={skill.name} />
    </SkillIconCircle>
    <div>
      <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
        {skill.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5, textAlign: "justify" }}
      >
        {skill.description}
      </Typography>
    </div>
  </Stack>
);

export const SkillsCard: React.FC = () => (
  <StyledSkillsCard>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <BuildIcon sx={{ color: "#FFC107" }} />
        <Typography variant="h6" sx={gradientText("#FFC107", "#ff8f00")}>
          Skills
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {data.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} />
        ))}
      </Stack>
    </CardContent>
  </StyledSkillsCard>
);
