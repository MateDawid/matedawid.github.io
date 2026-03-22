import { Box, CardContent, Stack, Typography } from "@mui/material";
import { gradientText } from "./utils";
import BoltIcon from "@mui/icons-material/Bolt";
import { experience_card_data as data } from "../data";
import { SkillChip } from "./SkillChip";
import {
  StyledExperienceCard,
  CompanyImageBox,
  CompanyImage,
} from "./ExperienceCard.style";
import { ProjectDescription } from "./ProjectsCard.style";

export const ExperienceCard: React.FC = () => (
  <StyledExperienceCard>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <BoltIcon sx={{ color: "#ff5ea8" }} />
        <Typography variant="h6" sx={gradientText("#ff5ea8", "#ffb84a")}>
          Experience
        </Typography>
      </Stack>
      <Stack spacing={3}>
        {data.experienceItems.map((item, idx) => (
          <Stack key={idx} spacing={1}>
            <Stack direction="row" spacing={2} alignItems="center">
              <CompanyImageBox>
                <CompanyImage
                  component="img"
                  src={item.company_image}
                  alt={item.company_name}
                />
              </CompanyImageBox>
              <Box flex={1}>
                <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                  {item.position}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.company_name} &nbsp;·&nbsp; {item.start_date} –{" "}
                  {item.end_date ?? "Present"}
                </Typography>

              </Box>
            </Stack>
                            {item.skills && (
                  <Stack direction="row" flexWrap="wrap">
                    {item.skills.map((skill) => (
                      <SkillChip key={skill} skill={skill} />
                    ))}
                  </Stack>
                )}
            <ProjectDescription variant="body2" color="text.secondary">
              {item.description}
            </ProjectDescription>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </StyledExperienceCard>
);
