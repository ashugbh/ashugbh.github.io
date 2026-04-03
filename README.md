# Ashenafi Gebrehiwet Brhane Portfolio

Personal portfolio website for Flutter and Backend Engineer roles, focused on production FinTech delivery.

## Live URL
`https://ashugbh.github.io/`

## Tech Stack
- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- `Google Fonts` (Inter, Outfit)

## Features
- Single-page, recruiter-focused portfolio layout
- Sections: Home, About, Skills, Experience, Projects, Contact
- Featured Emun case study with interactive screenshot slider:
  - prev/next controls
  - dot navigation
  - keyboard and touch support
  - autoplay with pause on interaction
- Typed hero role animation
- Scroll reveal and active navigation highlighting
- Mobile navigation drawer with click-outside and `Esc` close handling
- SEO and social metadata plus `robots.txt` and `sitemap.xml`

## Project Structure
```text
.
|-- index.html
|-- README.md
|-- robots.txt
|-- sitemap.xml
`-- assets
    |-- css
    |   `-- styles.css
    |-- js
    |   `-- main.js
    |-- preview.svg
    |-- images
    |   |-- My_photo.jpg
    |   `-- Emun
    |       |-- emun-1.jpg
    |       |-- emun-2.jpg
    |       |-- emun-3.jpg
    |       |-- emun-4.jpg
    |       |-- emun-5.jpg
    |       |-- photo_2026-04-03_11-06-47.jpg
    |       |-- photo_2026-04-03_11-06-48.jpg
    |       |-- photo_2026-04-03_11-06-49.jpg
    |       |-- photo_2026-04-03_11-06-49 (2).jpg
    |       `-- photo_2026-04-03_11-06-50.jpg
    `-- projects
        |-- ai-surveillance-system.png
        |-- ashugbh-portfolio.png
        |-- beqelal-fintech-app.png
        |-- bill-management-system.png
        `-- mobile-transaction-app.png
```

## Run Locally
No build step is required.

```bash
# Option 1: open directly
index.html

# Option 2: local server (recommended)
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Content Updates
Main files to edit:
- `index.html`: profile content, links, metadata, and sections
- `assets/css/styles.css`: design system, layout, and responsive styles
- `assets/js/main.js`: menu, reveal effects, slider, typed text, and active nav logic

If you change domain or deployment path, also update:
- canonical + Open Graph/Twitter URLs in `index.html`
- sitemap URL in `robots.txt`
- `<loc>` and `<lastmod>` values in `sitemap.xml`

## Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save and wait for deployment.

Expected URL for this project: `https://ashugbh.github.io/`
