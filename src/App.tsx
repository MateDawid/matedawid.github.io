import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import { SectionTitle } from "./components/SectionTitle";
import { HeaderSection } from "./sections/HeaderSection";

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HeaderSection/>
      <Divider sx={{ my: 4 }} />
      {/* MAIN GRID */}
      <Grid container spacing={6}>
        {/* LEFT COLUMN */}
        <Grid size={9}>
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

          <SectionTitle>Projects</SectionTitle>

          {/* Project 1 */}
          <Box mb={3}>
            <Typography fontWeight={600}>
              <Link href="#">My First Project</Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Short summary about my first project
            </Typography>

            <ul>
              <li>First Highlight of Project One</li>
              <li>Second Highlight of Project One</li>
              <li>Third Highlight of Project One</li>
            </ul>
          </Box>

          <SectionTitle>Education?</SectionTitle>

          {/* Volunteer 1 */}
          <Box mb={3}>
            <Typography fontWeight={600}>
              Position One at <Link href="#">Latest Organization</Link>
            </Typography>
            <Typography variant="caption">01/01/2020 – Present</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Short summary about present volunteer work
            </Typography>

            <ul>
              <li>First Duty of Current Organization</li>
              <li>Second Duty of Current Organization</li>
              <li>Third Duty of Current Organization</li>
            </ul>
          </Box>

          {/* Volunteer 2 */}
          <Box mb={3}>
            <Typography fontWeight={600}>
              Position Two at <Link href="#">Previous Organization</Link>
            </Typography>
            <Typography variant="caption">01/01/2010 – 01/01/2020</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Short summary about previous volunteer work
            </Typography>

            <ul>
              <li>First Duty of Previous Organization</li>
              <li>Second Duty of Previous Organization</li>
              <li>Third Duty of Previous Organization</li>
            </ul>
          </Box>

          {/* Project 2 */}
          <Box mb={3}>
            <Typography fontWeight={600}>
              <Link href="#">My Second Project</Link>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Short summary about my second project
            </Typography>

            <ul>
              <li>First Highlight of Project Two</li>
              <li>Second Highlight of Project Two</li>
              <li>Third Highlight of Project Two</li>
            </ul>
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid size={3}>
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
