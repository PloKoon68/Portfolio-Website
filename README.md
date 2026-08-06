# Portfolio Website

Personal portfolio site for **Mehmet Örs** — Software Engineer, Istanbul.

**Live:** https://mehmet-ors68.github.io/Portfolio-Website/

A single-page React application presenting my background, engineering projects, work
experience and competition results.

## Sections

| Route | Contents |
|---|---|
| `/` | Intro, education, tech stack, contact |
| `/projects` | Engineering projects with screenshots and demo videos |
| `/experiences` | Work history — Havelsan, Turkish Aerospace, TeknoSürüm, Caretta |
| `/contests` | Hackathons and competitions — TÜBİTAK, Teknofest, Hepsiburada |

## Tech Stack

- **React 19** with **React Router 7** for client-side routing
- **lucide-react** for icons
- Inline style objects and plain CSS — no UI framework
- Media assets bundled at build time via Webpack's `require.context`
- Deployed to **GitHub Pages** with the `gh-pages` package

## Running Locally

```bash
npm install
npm start          # http://localhost:3000
```

## Deploying

```bash
npm run deploy     # builds, then publishes ./build to the gh-pages branch
```

The `homepage` field in `package.json` sets the base path for built assets. It must
match the deployed URL path (`/Portfolio-Website`) or the site will load a blank page.

## Project Structure

```
src/
├── App.js                       Router and navigation bar
└── components/
    ├── NavBar.js
    └── pages/
        ├── MainPage/            Hero, education, section cards, skills, contact
        ├── ProjectsPage/        Project cards + assets/
        ├── ExperiencesPage/     Experience timeline + assets/
        ├── ContestsPage/        Competition cards + assets/
        └── HobbiesPage/         Not yet wired into the router
```

Each page folder keeps its images and videos in a local `assets/` directory, grouped
into one subfolder per project or company. `require.context` reads those folders at
build time and matches them to entries by name, so adding a new item means dropping
an asset folder in and adding an object to the page's array — no import statements
to update.

## Contact

**Mehmet Örs** — [GitHub](https://github.com/mehmet-ors68) · [LinkedIn](https://linkedin.com/in/mehmetors)
