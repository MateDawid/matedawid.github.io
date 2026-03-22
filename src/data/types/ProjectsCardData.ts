export type ProjectUrlType = "GitHub" | "Demo" | "Documentation" | "PyPi";

type ProjectUrl = {
  type: string;
  url: string;
};

type ProjectItem = {
  name: string;
  description: string;
  skills?: string[];
  image?: string;
  urls?: ProjectUrl[];
};

export type ProjectsCardData = {
  projectsItems: ProjectItem[];
};
