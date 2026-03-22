import { CardContent, Stack, Tooltip, Typography } from "@mui/material";
import { gradientText } from "./utils";
import TerminalIcon from "@mui/icons-material/Terminal";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projects_card_data as data } from "../data";
import {
  StyledProjectsCard,
  ProjectTitle,
  ProjectTitleLink,
  ProjectImage,
  ProjectDescription,
  UrlIconLink,
} from "./ProjectsCard.style";
import { SkillChip } from "./SkillChip";

const urlTypeIcon: Record<string, React.ReactElement> = {
  GitHub: <GitHubIcon />,
  Demo: <PlayCircleOutlineIcon />,
  Documentation: <MenuBookIcon />,
};

export const ProjectsCard: React.FC = () => (
  <StyledProjectsCard>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <TerminalIcon sx={{ color: "#00E676" }} />
        <Typography variant="h6" sx={gradientText("#00E676", "#4dd0e1")}>
          Projects
        </Typography>
      </Stack>
      <Stack spacing={3}>
        {data.projectsItems.map((item, idx) => (
          <Stack key={idx} spacing={1}>
            <ProjectTitle>
              {item.urls?.[0] ? (
                <ProjectTitleLink
                  href={item.urls[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                >
                  {item.name}
                </ProjectTitleLink>
              ) : (
                item.name
              )}
            </ProjectTitle>
            {item.skills && (
              <Stack direction="row" flexWrap="wrap">
                {item.skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </Stack>
            )}
            {item.image && (
              <ProjectImage component="img" src={item.image} alt={item.name} />
            )}
            <ProjectDescription variant="body2" color="text.secondary">
              {item.description}
            </ProjectDescription>
            {item.urls && (
              <Stack direction="row" gap={0.5} sx={{ mt: 0.5 }}>
                {item.urls.map((u) => (
                  <Tooltip key={u.url} title={u.type} arrow>
                    <UrlIconLink
                      href={u.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {urlTypeIcon[u.type] ?? (
                        <OpenInNewIcon fontSize="small" />
                      )}
                    </UrlIconLink>
                  </Tooltip>
                ))}
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </StyledProjectsCard>
);
