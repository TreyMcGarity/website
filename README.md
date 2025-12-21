# Portfolio Website

This repository contains my personal portfolio website — a small React app showcasing projects, skills, and contact information.

**Live demo:** treymcgarity

**Purpose:** This site is built to present selected work, provide a brief bio, and make it easy for potential employers or collaborators to contact me.

**Features**
- Project gallery with links and descriptions
- Responsive layout for mobile and desktop
- Contact section with email and social links
- Simple, fast React frontend (Create React App)

**Tech stack**
- React
- CSS (styled-components)
- Build with `npm run build`

## Getting Started

Prerequisites: Node.js and npm installed.

Install dependencies:

```bash
npm install
```

Run locally (development):

```bash
npm start
```

Open http://localhost:3000 to view the site while developing.

Build for production:

```bash
npm run build
```

The production-ready files will be generated in the `build/` folder and can be deployed to any static host.

## Customize for Your Portfolio
- Replace the contents of `src/App.jsx` and assets in `public/` and `src/` with your own projects and copy.
- Add project details and live links in the project gallery section of the app.
- Update metadata in `public/index.html` and `public/manifest.json` for branding.

## Deployment
You can deploy the `build/` folder to GitHub Pages, Netlify, Vercel, or any static hosting provider. Example for GitHub Pages:

```bash
npm run build
npm install --save-dev gh-pages
# then follow gh-pages setup to publish the build folder
```

## Contributing
This is a personal portfolio — contributions are optional. If you want to suggest improvements, open an issue or send a patch.

//Moving to a Next.js, for a Personal Developer Platform site creation (stay tuned)