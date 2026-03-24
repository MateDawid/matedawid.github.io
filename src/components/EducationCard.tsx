import * as React from "react";
import { CardContent, Stack, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { gradientText } from "./utils";
import { edication_card_data as data } from "../data";
import {
  StyledEducationCard,
  UniversityImageBox,
  UniversityImage,
} from "./EducationCard.style";

export const EducationCard: React.FC = () => (
  <StyledEducationCard>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <SchoolIcon sx={{ color: "#ffa726" }} />
        <Typography variant="h6" sx={gradientText("#ffa726", "#ffcc02")}>
          Education
        </Typography>
      </Stack>
      <Stack spacing={3}>
        {data.educationItems.map((item, idx) => (
          <Stack key={idx} direction="row" spacing={2}>
            <UniversityImageBox>
              <UniversityImage
                component="img"
                src={item.university_image}
                alt={item.university_name}
              />
            </UniversityImageBox>
            <Stack justifyContent="center">
              <Typography sx={{ fontWeight: 800, fontSize: 18 }}>
                {item.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.field_of_study}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {item.university_name} &nbsp;·&nbsp; {item.start_date} –{" "}
                {item.end_date ?? "Present"}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </StyledEducationCard>
);
