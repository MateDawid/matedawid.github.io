import { Box, Typography } from "@mui/material";
import { SectionTitle } from "../components";

export function SideSection() {
  return (
    <>
      <SectionTitle>Skills?</SectionTitle>
      <Box mb={5}>
        <Typography fontWeight={600}>English</Typography>
        <Typography variant="body2">Native speaker</Typography>

        <Typography fontWeight={600} sx={{ mt: 2 }}>
          American Sign Language
        </Typography>
        <Typography variant="body2">
          Professional Working Proficiency
        </Typography>
      </Box>
    </>
  );
}
