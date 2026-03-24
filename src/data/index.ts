import {
  ProfileCardData,
  AboutCardData,
  SkillsCardData,
  ExperienceCardData,
  ProjectsCardData,
  EducationCardData,
} from "./types";
import profile_card_json from "./profile_card.json";
import about_card_json from "./about_card.json";
import skills_card_json from "./skills_card.json";
import experience_card_json from "./experience_card.json";
import projects_card_json from "./projects_card.json";
import education_card_json from "./education_card.json"; 
import skill_chip_colors_json from "./skill_chip_colors.json";

export const profile_card_data: ProfileCardData = profile_card_json;
export const about_card_data: AboutCardData = about_card_json;
export const skills_card_data: SkillsCardData = skills_card_json;
export const experience_card_data: ExperienceCardData = experience_card_json;
export const projects_card_data: ProjectsCardData = projects_card_json;
export const edication_card_data: EducationCardData = education_card_json;
export const skill_chip_colors: Record<string, string> = skill_chip_colors_json;
