import { Container, Divider, Grid } from "@mui/material";
import { HeaderSection, MainSection, SideSection } from "./sections";

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <HeaderSection />
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={6}>
        {/* LEFT COLUMN */}
        <Grid size={9}>
          <MainSection />
        </Grid>
        {/* RIGHT COLUMN */}
        <Grid size={3}>
          <SideSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
