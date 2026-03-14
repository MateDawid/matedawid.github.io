import { Box, Link, Typography } from "@mui/material";
import { SectionTitle } from "../../../components";

export function WorkExperienceSubsection() {
  return (
    <>
      <SectionTitle>Work Experience</SectionTitle>
      {/* Job 1 */}
      <Box mb={3}>
        <Typography fontWeight={600}>
          Position One at <Link href="#">Latest Job</Link>
        </Typography>
        <Typography variant="caption">01/01/2020 – Present</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Short summary about present job and what the position entails
        </Typography>

        <ul>
          <li>First Duty of Current Job</li>
          <li>Second Duty of Current Job</li>
          <li>Third Duty of Current Job</li>
        </ul>
      </Box>

      {/* Job 2 */}
      <Box mb={5}>
        <Typography fontWeight={600}>
          Position Two at <Link href="#">Previous Job</Link>
        </Typography>
        <Typography variant="caption">01/01/2010 – 01/01/2020</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Short summary about previous job and what the position entailed
        </Typography>

        <ul>
          <li>First Duty of Previous Job</li>
          <li>Second Duty of Previous Job</li>
          <li>Third Duty of Previous Job</li>
        </ul>
      </Box>
    </>
  );
}
