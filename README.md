# Ashenafi Gebrehiwet Brhane Portfolio

Modern React portfolio for a Flutter and backend engineer, rebuilt from the original vanilla HTML/CSS/JS site into a modular Vite app.

## Stack

- React
- Vite
- CSS Modules
- Google Fonts: Inter and Outfit

## Features

- Modular React sections for navbar, hero, about, skills, experience, projects, contact, and footer
- Data-driven rendering for skills, experience, projects, and contact links
- Smooth scrolling navigation with active section tracking
- Subtle reveal animations and a typed hero role animation
- Dark/light mode toggle with persistent preference
- Accessible semantics, keyboard-friendly controls, and improved metadata
- Lazy-loaded images with fixed dimensions to reduce layout shift

## Run Locally

```bash
npm install
npm start
```

Vite runs on the local dev server shown in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
public/
  assets/
    images/
    projects/
    preview.svg
  robots.txt
  sitemap.xml
src/
  assets/
    classNames.js
    portfolioData.js
  components/
    layout/
    sections/
    ui/
  hooks/
  pages/
  styles/
```

## Content Updates

Edit `src/assets/portfolioData.js` to update:

- hero copy and CTA links
- about text and facts
- skill groups
- experience timeline
- featured case study and project cards
- contact and social links

Edit `src/styles/globals.css` to adjust the global theme, colors, spacing, and responsive breakpoints.

## Notes

- The app uses `npm start` for development and `npm run build` for production output.
- SEO tags are defined in `index.html` and synchronized at runtime from the React app.
- Static assets live in `public/assets`, while the source architecture lives under `src/`.
