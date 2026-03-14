import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { SectionTitle } from "./components";
import { HeaderSection, MainSection } from "./sections";

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HeaderSection/>
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={6}>
        {/* LEFT COLUMN */}
        <Grid size={9}>
          <MainSection/>
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
