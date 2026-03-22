import { Chip } from "@mui/material";
import { skill_chip_colors } from "../data";

type SkillChipProps = {
  skill: string;
};

export const SkillChip: React.FC<SkillChipProps> = ({ skill }) => {
  const color = skill_chip_colors[skill] ?? "#aaaaaa";
  return (
    <Chip
      label={skill}
      variant="outlined"
      size="small"
      sx={{
        mr: 0.5,
        mb: 0.5,
        borderColor: `${color}55`,
        backgroundColor: `${color}1a`,
        color,
      }}
    />
  );
};
