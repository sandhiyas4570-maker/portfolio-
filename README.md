# S. Sandhiya — Portfolio

A responsive 3D portfolio built with React, React Three Fiber, and Tailwind CSS. Every piece of content (about text, skills, education, projects, internship, certifications, contact details) is taken directly from the resume — nothing is invented.

## Design concept

The site is styled like a data notebook / plot environment, echoing the resume's data-visualization and ML skills:
- The hero background is a live 3D point cloud (React Three Fiber), like a scatter plot rendered in 3D space, with subtle mouse parallax.
- Section panels use tick-marked corner borders instead of drop-shadow cards.
- Education is shown as a literal timeline axis.
- Colors: deep ink navy background, amber and teal accents (inspired by common data-viz plot colors).
- Type: Space Grotesk (headings), Inter (body), JetBrains Mono (data labels).

No GitHub/LinkedIn links are shown because none are listed on the resume.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── resumeData.js       # all resume content lives here
    ├── hooks/
    │   └── useScrollSpy.js
    └── components/
        ├── Navbar.jsx
        ├── ScrollProgress.jsx
        ├── Hero.jsx
        ├── HeroCanvas.jsx      # 3D scene (React Three Fiber)
        ├── SectionHeading.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Running locally

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## Editing content

All resume-derived content lives in a single file: `src/data/resumeData.js`. To update any section (add a project, fix a phone number, etc.), edit that file only — the components render directly from it.

## Notes on performance & accessibility

- The 3D scene uses lightweight point clouds (not heavy meshes/textures), capped device pixel ratio, and pauses/simplifies for users with `prefers-reduced-motion` enabled.
- All interactive elements are keyboard-focusable with a visible focus ring.
- Color contrast follows WCAG AA for body text against the dark background.
- Animations use `framer-motion`'s `whileInView` with `once: true` so they don't re-trigger and cost extra work on every scroll.
