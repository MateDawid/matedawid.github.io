type ExperienceItem = {
  position: string;
  company_name: string;
  company_image?: string;
  description: string;
  skills?: string[];
  start_date: string;
  end_date?: string;
};

export type ExperienceCardData = {
  skill_chip_colors: Record<string, string>;
  experienceItems: ExperienceItem[];
};
