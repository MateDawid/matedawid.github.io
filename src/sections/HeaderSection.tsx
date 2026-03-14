      import { Box, Link, Typography } from "@mui/material";

export function HeaderSection() {
  return (
      <Box textAlign="center">
        <Typography variant="h4" fontWeight={700}>
          MY NAME
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <Link href="mailto:First.Last@example.com">
            First.Last@example.com
          </Link>{" "}
          · 123‑456‑7890 · City, State, Country
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
          {" "}
          A short summary of who you are, your background, experience, and
          interests to give visitors a quick introduction to you.
        </Typography>
      </Box>
  );
}
