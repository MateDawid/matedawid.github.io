export type EducationItem = {
  degree: string;
  field_of_study: string;
  university_name: string;
  university_image?: string;
  start_date: string;
  end_date?: string;
};

export type EducationCardData = {
  educationItems: EducationItem[];
};
