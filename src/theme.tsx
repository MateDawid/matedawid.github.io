import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0f14",
      paper: "#0e131a",
    },
    primary: { main: "#4dd0e1" },
    secondary: { main: "#ff4081" },
    success: { main: "#00E676" },
    warning: { main: "#FFC107" },
    info: { main: "#69F0AE" },
    text: {
      primary: "#e6f0ff",
      secondary: "#9fb3c8",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(1200px circle at 0% 10%, rgba(77,208,225,0.06), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.03) inset, 0 12px 30px rgba(0,0,0,0.5), 0 2px 12px rgba(77,208,225,0.12)",
          backdropFilter: "blur(8px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      },
    },
  },
});
