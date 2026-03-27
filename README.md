# matedawid.github.io

A personal CV/portfolio website built with **React**, **TypeScript**, and **MUI v5**. All content is driven by JSON files in `src/data/`, making it easy to fork and adapt. A PDF resume is auto-generated via **Puppeteer** and published alongside the site on every deploy.

---

## Features

- 📄 Data-driven cards — edit JSON files, no component changes needed
- 🖨️ PDF resume auto-generated from the same data on every deploy
- 🎨 MUI v5 dark theme with per-card accent colours
- 🚀 GitHub Actions CI/CD — generates PDF, builds, and deploys to GitHub Pages

---

## Project structure

```
src/
  components/       # React card components + styles
  cv-generator/     # Puppeteer PDF generation script
  data/             # ← All editable content lives here
    profile_card.json
    about_card.json
    experience_card.json
    projects_card.json
    education_card.json
    skills_card.json
    interests_card.json
    skill_chip_colors.json
    gdpr_clause.json
    types/          # TypeScript types for each JSON file
public/
  media/            # Images referenced in JSON files + generated resume.pdf
```

---

## Customising content (for forks)

All personal data is stored in `src/data/*.json`. Edit those files to make the site your own — no TypeScript changes required.

### `profile_card.json`

Your name, photo, job title, location, and contact links.

```json
{
  "name": "Your Name",
  "image": "/media/your_photo.jpg",
  "position": "Your Job Title",
  "location": "City, Country",
  "contact": {
    "email": "you@example.com",
    "phone": "+00 000 000 000",
    "github": "https://github.com/yourhandle",
    "linkedin": "https://www.linkedin.com/in/yourhandle/"
  }
}
```

### `about_card.json`

A short professional summary paragraph.

```json
{
  "summary": "Your professional summary text here."
}
```

### `experience_card.json`

List of work experience entries. `company_image` should be a path under `public/media/`. `skills` values are matched against `skill_chip_colors.json` for coloured chips.

```json
{
  "experienceItems": [
    {
      "position": "Job Title",
      "company_name": "Company Name",
      "company_image": "/media/company_logo.png",
      "description": "• Bullet point one.\n• Bullet point two.",
      "skills": ["Python", "React"],
      "start_date": "Jan 2024",
      "end_date": "Present"
    }
  ]
}
```

### `projects_card.json`

Personal or open-source projects. Supported `urls` types: `"GitHub"`, `"Demo"`, `"Documentation"`, `"PyPi"`.

```json
{
  "projectsItems": [
    {
      "name": "Project Name",
      "description": "• What it does.\n• Key features.",
      "skills": ["Python", "Django"],
      "image": "/media/project_screenshot.gif",
      "urls": [
        { "type": "GitHub", "url": "https://github.com/you/project" },
        { "type": "Demo", "url": "https://your-demo.com" }
      ]
    }
  ]
}
```

### `education_card.json`

University degrees. `university_image` is a path under `public/media/`.

```json
{
  "educationItems": [
    {
      "degree": "Master of Science",
      "field_of_study": "Your Field",
      "university_name": "Your University",
      "university_image": "/media/university_logo.jpg",
      "start_date": "2019",
      "end_date": "2021"
    }
  ]
}
```

### `skills_card.json`

Technical skills with a short description and icon image.

```json
{
  "skills": [
    {
      "name": "Python",
      "description": "Brief description of your experience.",
      "image": "/media/python.png"
    }
  ]
}
```

### `interests_card.json`

Personal interests shown in the website and PDF. `icon` is a [MUI icon name](https://mui.com/material-ui/material-icons/) used in the web app; `pdf_icon` is an emoji used in the generated PDF.

```json
{
  "interests": [
    {
      "name": "Books",
      "description": "Short description.",
      "icon": "MenuBook",
      "pdf_icon": "📚"
    }
  ]
}
```

### `skill_chip_colors.json`

Maps skill names to hex colours used for chips in the Experience and Projects cards (both web and PDF).

```json
{
  "Python": "#306998",
  "React": "#61DAFB"
}
```

### `gdpr_clause.json`

GDPR consent clause printed at the bottom of the PDF resume.

```json
{
  "clause": "I agree to the processing of personal data..."
}
```

### Adding images

Place any images referenced in the JSON files inside `public/media/`. The PDF generator reads them from the same folder and embeds them as base64 data URIs.

---

## Development

```bash
yarn install
yarn start        # Start dev server at http://localhost:3000
```

### Type checking & formatting

```bash
yarn tsc
yarn prettier:check
```

### Generate PDF resume locally

```bash
yarn generate-pdf   # Outputs to public/media/resume.pdf
```

---

## Deploying

1. Run pre-build checks:

```bash
yarn tsc
yarn prettier:check
```

2. Commit and push to `main`
3. GitHub Actions will automatically:
   - Generate the PDF resume (`yarn generate-pdf`)
   - Build the React app (`yarn build`)
   - Deploy to GitHub Pages
