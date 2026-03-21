import { ProfileCardData, AboutCardData } from "./types";
import { SkillsCardData } from "./types/SkillsCardData";
import { ExperienceCardData } from "./types/ExperienceCardData";
import profile_card_json from "./profile_card.json";
import about_card_json from "./about_card.json";
import skills_card_json from "./skills_card.json";
import experience_card_json from "./experience_card.json";

export const profile_card_data: ProfileCardData = profile_card_json;
export const about_card_data: AboutCardData = about_card_json;
export const skills_card_data: SkillsCardData = skills_card_json;
export const experience_card_data: ExperienceCardData =
  experience_card_json as ExperienceCardData;
