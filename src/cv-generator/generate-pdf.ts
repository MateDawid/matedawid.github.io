import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { buildHtml } from "./html-builder";

const dataDir = path.join(__dirname, "../data");
const mediaDir = path.join(__dirname, "../../public/media");
const outputPath = path.join(__dirname, "../../public/media/resume.pdf");

const profile = JSON.parse(
  fs.readFileSync(path.join(dataDir, "profile_card.json"), "utf8"),
);
const about = JSON.parse(
  fs.readFileSync(path.join(dataDir, "about_card.json"), "utf8"),
);
const experience = JSON.parse(
  fs.readFileSync(path.join(dataDir, "experience_card.json"), "utf8"),
);
const projects = JSON.parse(
  fs.readFileSync(path.join(dataDir, "projects_card.json"), "utf8"),
);
const education = JSON.parse(
  fs.readFileSync(path.join(dataDir, "education_card.json"), "utf8"),
);
const skills = JSON.parse(
  fs.readFileSync(path.join(dataDir, "skills_card.json"), "utf8"),
);
const interests = JSON.parse(
  fs.readFileSync(path.join(dataDir, "interests_card.json"), "utf8"),
);
const gdpr = JSON.parse(
  fs.readFileSync(path.join(dataDir, "gdpr_clause.json"), "utf8"),
);

function imgSrc(relativePath: string): string {
  const filename = relativePath.replace(/^\/media\//, "");
  const fullPath = path.join(mediaDir, filename);
  if (!fs.existsSync(fullPath)) return "";
  const ext = path.extname(filename).slice(1).toLowerCase();
  const mime =
    ext === "jpg" || ext === "jpeg"
      ? "image/jpeg"
      : ext === "gif"
        ? "image/gif"
        : "image/png";
  const data = fs.readFileSync(fullPath).toString("base64");
  return `data:${mime};base64,${data}`;
}

const html = buildHtml({
  profile,
  about,
  experience,
  projects,
  education,
  skills,
  interests,
  gdpr,
  imgSrc,
});

(async (): Promise<void> => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
  console.log(`PDF generated: ${outputPath}`);
})();
