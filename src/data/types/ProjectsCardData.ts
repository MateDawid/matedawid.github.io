export type ProjectUrlType = "GitHub" | "Demo" | "Documentation" | "PyPi";

export type ProjectUrl = {
  type: string;
  url: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  skills?: string[];
  image?: string;
  urls?: ProjectUrl[];
  start_date?: string;
  end_date?: string;
};

export type ProjectsCardData = {
  projectsItems: ProjectItem[];
};
