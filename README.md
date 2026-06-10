# Sandra Ogbudinkpa | Software Engineering Portfolio

A responsive, multi-page software engineering portfolio built with the Next.js
App Router. The site presents my professional experience, technical skills,
computer engineering projects, education, certifications, and resume.

**Live site:** [sandra-ogbudinkpa.vercel.app](https://sandra-ogbudinkpa.vercel.app)

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- Responsive and accessible semantic HTML

## Pages

- Home
- About
- Projects
- Dynamic project case studies
- Experience
- Skills
- Resume with PDF download
- Contact
- Blog placeholder

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Project Structure

```text
app/                  Routes, layouts, and global styles
components/           Reusable layout, page, and UI components
data/                 TypeScript content for the portfolio
lib/                  Shared utilities
public/images/        Static image assets
public/resume/        Downloadable resume
```

## Content

Portfolio content is maintained in TypeScript files under `data/`, keeping the
site easy to update without a database.
