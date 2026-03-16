export type ProfileCardData = {
  name: string;
  position?: string;
  image?: string;
  location?: string;
  contact: {
    phone?: string;
    email?: string;
    github?: string;
    linkedin?: string;
  };
  summary: string;
};
