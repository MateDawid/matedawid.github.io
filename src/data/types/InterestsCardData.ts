export type InterestItem = {
  name: string;
  description: string;
  icon: string;
  pdf_icon?: string;
};

export type InterestsCardData = {
  interests: InterestItem[];
};
