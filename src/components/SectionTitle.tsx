import { Typography } from "@mui/material";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="h6"
      sx={{
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: 600,
        mt: 4,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}
