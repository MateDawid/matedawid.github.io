import { Box, CardContent, Chip, Stack, Typography } from "@mui/material";
import { gradientText } from "./utils";
import BoltIcon from "@mui/icons-material/Bolt";
import { experience_card_data as data } from "../data";
import {
  StyledExperienceCard,
  CompanyImageBox,
  CompanyImage,
} from "./ExperienceCard.style";

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
          <Stack key={idx} direction="row" spacing={2}>
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
              {item.skills && (
                <Stack direction="row" flexWrap="wrap" sx={{ mb: 1 }}>
                  {item.skills.map((skill, i) => {
                    const color = data.skill_chip_colors[skill] ?? "#aaaaaa";
                    return (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          borderColor: `${color}55`,
                          backgroundColor: `${color}1a`,
                          color,
                          mr: 0.5,
                          mb: 0.5,
                        }}
                        variant="outlined"
                        size="small"
                      />
                    );
                  })}
                </Stack>
              )}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                {item.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </StyledExperienceCard>
);
