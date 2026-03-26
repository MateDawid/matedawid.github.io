export interface TemplateData {
  profile: Record<string, any>;
  about: Record<string, any>;
  experience: Record<string, any>;
  projects: Record<string, any>;
  education: Record<string, any>;
  skills: Record<string, any>;
  interests: Record<string, any>;
  imgSrc: (relativePath: string) => string;
}

const interestIconMap: Record<string, string> = {
  MenuBook: "📚",
  SportsEsports: "🎮",
  FitnessCenter: "🏋️",
};

function escHtml(str: string | undefined | null): string {
  if (str == null) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function bulletLines(text: string): string {
  return text
    .split("\n")
    .map((line) => `<div class="bullet-line">${escHtml(line)}</div>`)
    .join("");
}

function sectionTitle(icon: string, label: string): string {
  return `<div class="section-title"><span class="section-icon">${icon}</span>${label}</div>`;
}

function skillChips(
  skillList: string[],
  skillChipColors: Record<string, string>,
): string {
  return skillList
    .map((s) => {
      const color = skillChipColors[s] ?? "#555";
      return `<span class="chip" style="border-color:${color};color:${color}">${escHtml(s)}</span>`;
    })
    .join("");
}

const CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #ffffff;
    color: #111111;
    font-size: 11px;
    line-height: 1.5;
    padding: 28px 32px;
  }
  a { color: #0066cc; text-decoration: none; }

  /* Header */
  .header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px; }
  .header-avatar { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #111; flex-shrink: 0; }
  .header-info { display: flex; justify-content: space-between; align-items: flex-start; flex: 1; gap: 12px; }
  .header-name-block h1 { font-size: 22px; font-weight: 800; color: #111; margin-bottom: 2px; }
  .header-name-block .position { font-size: 13px; font-weight: 600; color: #333; margin: 2px 0; }
  .header-name-block .location { font-size: 11px; color: #555; }
  .header-contacts { display: flex; flex-direction: column; gap: 5px; align-items: flex-end; flex-shrink: 0; }
  .header-contacts a { font-size: 10px; color: #0066cc; display: flex; align-items: center; gap: 4px; white-space: nowrap; }
  .contact-icon { width: 12px; height: 12px; flex-shrink: 0; fill: #0066cc; }

  /* About */
  .about { background: #fff; border: 1px solid #111; border-radius: 6px; padding: 10px 14px; margin-bottom: 12px; font-size: 11px; color: #222; text-align: justify; }

  /* Two-column layout */
  .columns { display: flex; gap: 14px; }
  .col-left { flex: 0 0 62%; }
  .col-right { flex: 1; }

  /* Cards */
  .card { border-radius: 6px; border: 1px solid #111; background: #fff; padding: 10px 12px; margin-bottom: 12px; page-break-inside: avoid; break-inside: avoid; }

  .section-title { display: flex; align-items: center; gap: 5px; font-size: 13px; font-weight: 800; color: #111; margin-bottom: 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }

  /* Items */
  .item { margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid; }
  .item:last-child { margin-bottom: 0; }
  .item-header { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
  .item-title { font-size: 12px; font-weight: 700; color: #111; }
  .item-date  { font-size: 10px; color: #555; white-space: nowrap; }
  .item-sub   { font-size: 10px; color: #444; margin: 1px 0 4px; }
  .chips { display: flex; flex-wrap: wrap; gap: 3px; margin: 5px 0; }
  .chip { font-size: 9px; border: 1px solid; border-radius: 10px; padding: 1px 6px; background: #fff; }
  .bullet-line { color: #333; font-size: 10px; line-height: 1.6; }

  /* Item with image */
  .item-row { display: flex; gap: 10px; align-items: flex-start; }
  .item-img-col { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
  .item-img { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid #ccc; flex-shrink: 0; background: #f5f5f5; }
  .item-body { flex: 1; }

  /* Skills */
  .skill-item { margin-bottom: 8px; }
  .skill-item:last-child { margin-bottom: 0; }
  .skill-row { display: flex; gap: 8px; align-items: flex-start; }
  .skill-img { width: 32px; height: 32px; object-fit: contain; flex-shrink: 0; }
  .skill-name { font-size: 11px; font-weight: 700; color: #111; }
  .skill-desc { font-size: 10px; color: #444; margin-top: 1px; }

  /* Projects */
  .project-name { font-size: 12px; font-weight: 700; color: #0066cc; }
  .project-urls { display: flex; gap: 8px; margin-top: 4px; flex-wrap: wrap; }
  .project-urls a { font-size: 9px; color: #0066cc; }

  /* Education */
  .edu-degree { font-size: 12px; font-weight: 700; color: #111; }
  .edu-field  { font-size: 10px; color: #333; }

  /* Interests */
  .interest-item { margin-bottom: 7px; }
  .interest-item:last-child { margin-bottom: 0; }
  .interest-row { display: flex; gap: 8px; align-items: flex-start; }
  .interest-icon { font-size: 20px; flex-shrink: 0; width: 28px; text-align: center; }
  .interest-name { font-size: 11px; font-weight: 700; color: #111; }
  .interest-desc { font-size: 10px; color: #444; margin-top: 1px; }
`;

export function buildHtml(data: TemplateData): string {
  const {
    profile,
    about,
    experience,
    projects,
    education,
    skills,
    interests,
    imgSrc,
  } = data;
  const skillChipColors: Record<string, string> =
    experience.skill_chip_colors ?? {};

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>${CSS}</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  ${profile.image ? `<img class="header-avatar" src="${imgSrc(profile.image)}" alt="avatar"/>` : ""}
  <div class="header-info">
    <div class="header-name-block">
      <h1>${escHtml(profile.name)}</h1>
      <div class="position">${escHtml(profile.position ?? "")}</div>
      <div class="location">${escHtml(profile.location ?? "")}</div>
    </div>
    <div class="header-contacts">
      ${profile.contact?.email ? `<a href="mailto:${escHtml(profile.contact.email)}"><svg class="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>${escHtml(profile.contact.email)}</a>` : ""}
      ${profile.contact?.phone ? `<a href="tel:${escHtml(profile.contact.phone)}"><svg class="contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/></svg>${escHtml(profile.contact.phone)}</a>` : ""}
      ${profile.contact?.github ? `<a href="${escHtml(profile.contact.github)}"><svg class="contact-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>${escHtml(profile.contact.github)}</a>` : ""}
      ${profile.contact?.linkedin ? `<a href="${escHtml(profile.contact.linkedin)}"><svg class="contact-icon" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H6.5v-7H9v7zm-1.25-8.27a1.37 1.37 0 1 1 0-2.74 1.37 1.37 0 0 1 0 2.74zM18 17h-2.5v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17H10v-7h2.5v1.1c.46-.7 1.27-1.1 2-1.1 1.66 0 3 1.34 3 3V17z"/></svg>${escHtml(profile.contact.linkedin)}</a>` : ""}
    </div>
  </div>
</div>

<!-- ABOUT -->
<div class="about">${escHtml(about.summary)}</div>

<!-- TWO COLUMNS -->
<div class="columns">
  <div class="col-left">

    <!-- EXPERIENCE -->
    <div class="card">
      ${sectionTitle("⚡", "Experience")}
      ${experience.experienceItems
        .map(
          (item: {
            position: string;
            start_date: string;
            end_date?: string;
            company_name: string;
            company_image?: string;
            skills?: string[];
            description: string;
          }) => `
        <div class="item">
          <div class="item-row">
            ${item.company_image && imgSrc(item.company_image) ? `<img class="item-img" src="${imgSrc(item.company_image)}" alt="${escHtml(item.company_name)}"/>` : ""}
            <div class="item-body">
              <div class="item-header">
                <span class="item-title">${escHtml(item.position)}</span>
                <span class="item-date">${escHtml(item.start_date)} – ${escHtml(item.end_date ?? "Present")}</span>
              </div>
              <div class="item-sub">${escHtml(item.company_name)}</div>
            </div>
          </div>
          ${item.skills?.length ? `<div class="chips">${skillChips(item.skills, skillChipColors)}</div>` : ""}
          <div style="margin-top:5px">${bulletLines(item.description)}</div>
        </div>`,
        )
        .join("")}
    </div>

    <!-- PROJECTS -->
    <div class="card">
      ${sectionTitle("⌨", "Projects")}
      ${projects.projectsItems
        .map(
          (item: {
            name: string;
            start_date?: string;
            end_date: string;
            skills?: string[];
            description: string;
            urls?: { type: string; url: string }[];
          }) => `
        <div class="item">
          <div class="item-header">
            <span class="project-name">${escHtml(item.name)}</span>
            <span class="item-date">${item.start_date ? escHtml(item.start_date) + " – " : ""}${escHtml(item.end_date)}</span>
          </div>
          ${item.skills?.length ? `<div class="chips">${skillChips(item.skills, skillChipColors)}</div>` : ""}
          <div style="margin-top:5px">${bulletLines(item.description)}</div>
          ${item.urls?.length ? `<div class="project-urls">${item.urls.map((u: { type: string; url: string }) => `<a href="${escHtml(u.url)}">${escHtml(u.type)}</a>`).join("")}</div>` : ""}
        </div>`,
        )
        .join("")}
    </div>

    <!-- EDUCATION -->
    <div class="card">
      ${sectionTitle("🎓", "Education")}
      ${education.educationItems
        .map(
          (item: {
            degree: string;
            start_date: string;
            end_date?: string;
            field_of_study: string;
            university_name: string;
            university_image?: string;
          }) => `
        <div class="item">
          <div class="item-row">
            ${item.university_image && imgSrc(item.university_image) ? `<img class="item-img" src="${imgSrc(item.university_image)}" alt="${escHtml(item.university_name)}"/>` : ""}
            <div class="item-body">
              <div class="item-header">
                <span class="edu-degree">${escHtml(item.degree)}</span>
                <span class="item-date">${escHtml(item.start_date)} – ${escHtml(item.end_date ?? "Present")}</span>
              </div>
              <div class="edu-field">${escHtml(item.field_of_study)}</div>
              <div class="item-sub">${escHtml(item.university_name)}</div>
            </div>
          </div>
        </div>`,
        )
        .join("")}
    </div>

  </div>

  <div class="col-right">

    <!-- SKILLS -->
    <div class="card">
      ${sectionTitle("🔧", "Skills")}
      ${skills.skills
        .map(
          (s: { name: string; description: string; image?: string }) => `
        <div class="skill-item">
          <div class="skill-row">
            ${s.image && imgSrc(s.image) ? `<img class="skill-img" src="${imgSrc(s.image)}" alt="${escHtml(s.name)}"/>` : ""}
            <div>
              <div class="skill-name">${escHtml(s.name)}</div>
              <div class="skill-desc">${escHtml(s.description)}</div>
            </div>
          </div>
        </div>`,
        )
        .join("")}
    </div>

    <!-- INTERESTS -->
    <div class="card">
      ${sectionTitle("⭐", "Interests")}
      ${interests.interests
        .map(
          (i: { name: string; description: string; icon: string }) => `
        <div class="interest-item">
          <div class="interest-row">
            <span class="interest-icon">${interestIconMap[i.icon] ?? "⭐"}</span>
            <div>
              <div class="interest-name">${escHtml(i.name)}</div>
              <div class="interest-desc">${escHtml(i.description)}</div>
            </div>
          </div>
        </div>`,
        )
        .join("")}
    </div>

  </div>
</div>
</body>
</html>`;
}
