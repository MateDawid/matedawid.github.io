import * as React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  Typography,
  Avatar,
  Button,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MUILink,
  Tooltip,
  IconButton,
  useTheme,
} from '@mui/material';

import TimelineIcon from '@mui/icons-material/Timeline';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BoltIcon from '@mui/icons-material/Bolt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CodeIcon from '@mui/icons-material/Code';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LaunchIcon from '@mui/icons-material/Launch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// -------------------- THEME --------------------
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0f14',
      paper: '#0e131a',
    },
    primary: { main: '#4dd0e1' },
    secondary: { main: '#ff4081' },
    success: { main: '#00E676' },
    warning: { main: '#FFC107' },
    info: { main: '#69F0AE' },
    text: {
      primary: '#e6f0ff',
      secondary: '#9fb3c8',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255,255,255,0.08)',
          background:
            'radial-gradient(1200px circle at 0% 10%, rgba(77,208,225,0.06), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%)',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.03) inset, 0 12px 30px rgba(0,0,0,0.5), 0 2px 12px rgba(77,208,225,0.12)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
  },
});

// -------------------- UTIL STYLES --------------------
const glow = (color = '#4dd0e1', opacity = 0.3) => ({
  boxShadow: `0 0 0 1px ${color}33 inset, 0 10px 24px ${color}33, 0 0 30px ${color}${Math.round(
    opacity * 255
  ).toString(16)}`,
});

const gradientText = (from: string, to: string) => ({
  background: `linear-gradient(90deg, ${from}, ${to})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const SectionHeader: React.FC<{ title: string; chip?: string }> = ({ title, chip }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
    <Typography variant="h6" sx={{ letterSpacing: 0.5, fontWeight: 700 }}>
      {title}
    </Typography>
    {chip && <Chip size="small" label={chip} />}
  </Box>
);

// -------------------- DATA --------------------
const resources = [
  'SQL Case Studies (2023, v2)',
  'Private Articles',
  'Cheatsheets',
  'Video: Advanced Joins',
];

const skills_mini = [
  { label: 'Python', color: '#ff5ea8' },
  { label: 'Django', color: '#ff8f6b' },
  { label: 'DRF', color: '#ffb84a' },
  { label: 'TypeScript', color: '#c77dff' },
];

const arcadeTags = ['joins', 'window functions', 'CTEs', 'indexes', 'optimization'];

const socials = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/' },
  { icon: <TwitterIcon />, label: 'X/Twitter', href: 'https://twitter.com/' },
];

// -------------------- COMPONENTS --------------------
const ProfileCard: React.FC = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          sx={{ width: 112, height: 112 }}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
          alt="Profile"
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Brian Cohen
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const AboutCard: React.FC = () => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <SectionHeader title="About Me"/>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
        I write about SQL, performance engineering, and developer workflow. I enjoy designing
        learning tools that feel like games. Below are some projects, utilities, and places
        to connect.
      </Typography>
    </CardContent>
  </Card>
);

const ExperienceSection: React.FC = () => (
  <Card sx={{
    borderColor: 'rgba(255,64,129,0.25)',
    background:
      'radial-gradient(800px circle at 0% 0%, rgba(255,64,129,0.10), transparent 40%), rgba(255,255,255,0.02)',
  }}>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <BoltIcon sx={{ color: '#ff5ea8' }} />
        <Typography variant="h6" sx={gradientText('#ff5ea8', '#ffb84a')}>
          Experience
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {/* JOB 1 */}
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 110,
              height: 150,
              borderRadius: 2,
              background:
                'linear-gradient(145deg, rgba(255,64,129,0.35), rgba(77,208,225,0.25))',
              border: '1px solid rgba(255,255,255,0.10)',
              ...glow('#ff4081', 0.2),
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>ING Hubs</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1, mt: 1 }} flexWrap="wrap">
              {skills_mini.map((u, i) => (
                <Chip
                  key={i}
                  label={u.label}
                  sx={{
                    borderColor: `${u.color}55`,
                    backgroundColor: `${u.color}1a`,
                    color: u.color,
                    mr: 1,
                    mb: 1,
                  }}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 420 }}>
              Bla bla about job
            </Typography>
          </Box>
        </Stack>
        {/* JOB 2 */}
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: 110,
              height: 150,
              borderRadius: 2,
              background:
                'linear-gradient(145deg, rgba(255,64,129,0.35), rgba(77,208,225,0.25))',
              border: '1px solid rgba(255,255,255,0.10)',
              ...glow('#ff4081', 0.2),
            }}
          />
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 18 }}>ING Hubs</Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 1, mt: 1 }} flexWrap="wrap">
              {skills_mini.map((u, i) => (
                <Chip
                  key={i}
                  label={u.label}
                  sx={{
                    borderColor: `${u.color}55`,
                    backgroundColor: `${u.color}1a`,
                    color: u.color,
                    mr: 1,
                    mb: 1,
                  }}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
            <Typography variant="body2" sx={{ maxWidth: 420 }}>
              Bla bla about job
            </Typography>
          </Box>
        </Stack>
      </Stack>

    </CardContent>
  </Card>
);

const ProjectsSection: React.FC = () => (
  <Card
    sx={{
      borderColor: 'rgba(0,230,118,0.25)',
      background:
        'radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)',
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <TerminalIcon sx={{ color: '#00E676' }} />
        <Typography variant="h6" sx={gradientText('#00E676', '#4dd0e1')}>
          Projects
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        Try queries against sandbox datasets. No setup required.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2, px: 2.5, ...glow('#00E676', 0.22) }}
        endIcon={<PlayArrowIcon />}
      >
        Query Demos
      </Button>
    </CardContent>
  </Card>
);


// Example SVG logos (compact). Replace with your asset paths or MUI icons.
const Logos = {
  HTML: (
    <svg width="44" height="44" viewBox="0 0 128 128" aria-hidden focusable="false">
      <path fill="#E44D26" d="M19 114L9 1h110l-10 113-45 13z"/>
      <path fill="#F16529" d="M64 117l36-10 8-89H64z"/>
      <path fill="#EBEBEB" d="M64 52H44l1 12h19V52zm0-24H43l1 12h20V28zm0 54l-.1.03L51 79l-1-10H38l2 24 24 7 .1-.03V82z"/>
      <path fill="#FFF" d="M64 52v12h18l-2 15-16 4v12l24-7 3-36H64zm0-24v12h22l1-12H64z"/>
    </svg>
  ),
  CSS: (
    <svg width="44" height="44" viewBox="0 0 128 128" aria-hidden focusable="false">
      <path fill="#1572B6" d="M19 114L9 1h110l-10 113-45 13z"/>
      <path fill="#33A9DC" d="M64 117l36-10 8-89H64z"/>
      <path fill="#EBEBEB" d="M64 52H44l1 12h19V52zm0-24H43l1 12h20V28zm0 54l-.1.03L51 79l-1-10H38l2 24 24 7 .1-.03V82z"/>
      <path fill="#FFF" d="M64 64v12h18l-2 15-16 4v12l24-7 3-36H64zm0-36v12h22l1-12H64z"/>
    </svg>
  ),
  JS: (
    <svg width="44" height="44" viewBox="0 0 128 128" aria-hidden focusable="false">
      <path fill="#000" d="M19 19h90v90H19z" />
      <text x="50%" y="60%" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="56" fill="#FFC107">JS</text>
    </svg>
  ),
  React: (
    <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden focusable="false">
      <g fill="none" stroke="#000" strokeWidth="12">
        <ellipse cx="128" cy="128" rx="90" ry="36"/>
        <ellipse cx="128" cy="128" rx="90" ry="36" transform="rotate(60 128 128)"/>
        <ellipse cx="128" cy="128" rx="90" ry="36" transform="rotate(120 128 128)"/>
      </g>
      <circle cx="128" cy="128" r="14" fill="#000"/>
    </svg>
  ),
  Next: (
    <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden focusable="false">
      <circle cx="128" cy="128" r="110" fill="none" stroke="#000" strokeWidth="14"/>
      <path d="M98 80h60M98 128h60M98 176h60" stroke="#000" strokeWidth="14" strokeLinecap="round"/>
      <path d="M165 190L98 80" stroke="#000" strokeWidth="14" strokeLinecap="round"/>
    </svg>
  ),
  Supabase: (
    <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden focusable="false">
      <path d="M120 20l-70 110h60l-30 106 126-180h-64l26-36z" fill="#000" />
    </svg>
  ),
  Firebase: (
    <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden focusable="false">
      <path d="M60 190l36-142 28 54 20-36 52 124-136 32z" fill="#000"/>
    </svg>
  ),
  Tailwind: (
    <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden focusable="false">
      <path d="M64 128c16-48 56-72 88-40 8 8 12 16 12 24-16-24-40-24-56-8-8 8-12 16-16 24-16 48-56 72-88 40 16 24 40 24 60 10 8-6 14-14 20-26z" fill="#000"/>
    </svg>
  ),
  TypeScript: (
    <svg width="44" height="44" viewBox="0 0 128 128" aria-hidden focusable="false">
      <rect width="128" height="128" rx="12" fill="#000" />
      <text x="50%" y="58%" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="48" fill="#FFC107">TS</text>
    </svg>
  ),
  Figma: (
    <svg width="44" height="44" viewBox="0 0 128 128" aria-hidden focusable="false">
      <circle cx="48" cy="32" r="16" fill="#000"/>
      <circle cx="80" cy="32" r="16" fill="#000"/>
      <circle cx="48" cy="64" r="16" fill="#000"/>
      <circle cx="80" cy="64" r="16" fill="#000"/>
      <circle cx="64" cy="96" r="16" fill="#000"/>
    </svg>
  ),
};


type SkillItem = {
  name: string;
  key: string;
  logo: React.ReactNode;
  href?: string;
  onClick?: () => void;
};


const skills: SkillItem[] = [
  { key: 'html', name: 'HTML', logo: Logos.HTML },
  { key: 'css', name: 'CSS', logo: Logos.CSS },
  { key: 'js', name: 'Javascript', logo: Logos.JS },
  { key: 'react', name: 'React', logo: Logos.React },
  { key: 'next', name: 'Next', logo: Logos.Next },
  { key: 'supabase', name: 'Supabase', logo: Logos.Supabase },
  { key: 'firebase', name: 'Firebase', logo: Logos.Firebase },
  { key: 'tailwind', name: 'Tailwind', logo: Logos.Tailwind },
  { key: 'ts', name: 'Typescript', logo: Logos.TypeScript },
  { key: 'figma', name: 'Figma', logo: Logos.Figma },
];

 


// A single skill tile
const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  const theme = useTheme();
  return (
    <Box
      role="button"
      aria-label={skill.name}
      tabIndex={0}
      onClick={skill.onClick}
      sx={{
        // Sizing
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: 2,
        // Colors per your reference (yellow tile with black content)
        bgcolor: '#FFC107',
        color: theme.palette.getContrastText('#FFC107') === '#000' ? '#000' : '#000',
        // Border + shadow
        border: '2px solid rgba(0,0,0,0.35)',
        boxShadow:
          '3px 3px 0 rgba(0,0,0,0.45), 0 10px 24px rgba(0,0,0,0.10)',
        // Layout for icon+label
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
        cursor: skill.href || skill.onClick ? 'pointer' : 'default',
        outline: 'none',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow:
            '6px 6px 0 rgba(0,0,0,0.45), 0 18px 36px rgba(0,0,0,0.16)',
          bgcolor: '#FFCA28',
        },
        '&:focus-visible': {
          ...glow(theme.palette.secondary.main, 0.35),
        },
      }}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && (skill.onClick || skill.href)) {
          e.preventDefault();
          if (skill.onClick) skill.onClick();
          if (skill.href) window.open(skill.href, '_blank', 'noopener,noreferrer');
        }
      }}
      onMouseUp={() => {
        if (skill.href) window.open(skill.href, '_blank', 'noopener,noreferrer');
      }}
    >
      <Box sx={{ lineHeight: 0 }}>{skill.logo}</Box>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 700, letterSpacing: 0.2, color: '#000' }}
      >
        {skill.name}
      </Typography>
    </Box>
  );
};



export const SkillsSection: React.FC = () => (
  <Card
    sx={{
      overflow: 'hidden',
      p: 0,
      background:
        'linear-gradient(180deg, rgba(255,64,129,0.08) 0%, rgba(255,64,129,0.02) 100%), ' +
        'radial-gradient(1600px 300px at 50% 60%, rgba(255,64,129,0.22), rgba(0,0,0,0) 60%)',
    }}
  >
    {/* Header */}
    <Box sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <StorageIcon color="secondary" />
        <Typography
          variant="overline"
          color="text.secondary"
          letterSpacing={1.2}
        >
          Skills
        </Typography>
      </Stack>
    </Box>

    {/* Grid of skills */}
    <Box sx={{ px: 3, pb: 3 }}>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid key={skill.key} size={{xs: 6, sm: 4, md: 3, lg: 2.4 as any}}>
            {/* lg=2.4 gives 5 columns on large screens; TS may need any-cast */}
            <SkillCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Card>
);


const EducationSection: React.FC = () => (
  <Card
    sx={{
      borderColor: 'rgba(0,230,118,0.25)',
      background:
        'radial-gradient(800px circle at 100% 0%, rgba(0,230,118,0.12), transparent 40%), rgba(255,255,255,0.02)',
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <TerminalIcon sx={{ color: '#00E676' }} />
        <Typography variant="h6" sx={gradientText('#00E676', '#4dd0e1')}>
          Education
        </Typography>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        Try queries against sandbox datasets. No setup required.
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 2, px: 2.5, ...glow('#00E676', 0.22) }}
        endIcon={<PlayArrowIcon />}
      >
        Query Demos
      </Button>
    </CardContent>
  </Card>
);

// -------------------- PAGE --------------------
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background:
            'radial-gradient(1200px circle at 20% -10%, rgba(77,208,225,0.08), transparent 40%), ' +
            'radial-gradient(1000px circle at 100% 0%, rgba(255,64,129,0.06), transparent 35%), ' +
            'linear-gradient(180deg, #0b0f14 0%, #0b0f14 100%)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <ProfileCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <AboutCard />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <SkillsSection />
            </Grid>
            <Grid size={12}>
              <ExperienceSection />
            </Grid>
            <Grid size={12}>
              <ProjectsSection />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <EducationSection />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
