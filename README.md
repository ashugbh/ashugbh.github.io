# Flutter & Backend Engineer Portfolio

Modern, minimal, recruiter-friendly portfolio website built with vanilla `HTML`, `CSS`, and `JavaScript` for a FinTech-focused engineer profile.

This starter is intentionally populated with placeholder text so you can safely customize it with your personal details later.

## Live Portfolio Goals
- Clean first impression for recruiters and hiring managers
- Fast loading, responsive UI on desktop and mobile
- Strong section structure for interview-ready storytelling
- Easy deployment to GitHub Pages

## Tech Stack
- `HTML5` (semantic, SEO-friendly structure)
- `CSS3` (custom design system, responsive layout, subtle animations)
- `JavaScript` (mobile nav, smooth scrolling, reveal effects, form feedback)

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
    |-- preview.svg
    `-- js
        `-- main.js
```

## Sections Included
1. Hero
2. About
3. Skills (categorized)
4. Experience (timeline)
5. Projects (card layout)
6. Contact (form + links)
7. Footer

## Customize Before Applying
Update these placeholders in `index.html`:
- `[Your Name]`
- Hero tagline and about text
- Experience entries (role, company, impact)
- Project titles/descriptions/links
- Contact email + LinkedIn URL
- Canonical and Open Graph URL metadata

## Run Locally
No build tools required. Open `index.html` directly in your browser.

For a local server (recommended):
```bash
# Python 3
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

### 1. Create a repository on GitHub
You can use:
- `portfolio` (project site), or
- `ashugbh.github.io` (user site)

### 2. Push this code
```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/ashugbh/<repo-name>.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Open your repository on GitHub
2. Go to `Settings` -> `Pages`
3. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save

### 4. Access your deployed site
- If repo is `ashugbh.github.io`:
  - `https://ashugbh.github.io/`
- If repo is a project repo (for example `portfolio`):
  - `https://ashugbh.github.io/portfolio/`

## SEO Notes
- `robots.txt` and `sitemap.xml` are included
- Meta description and social tags are preconfigured in `index.html`
- Remember to update URL values to your final deployed path

## Recommended Next Upgrades
1. Replace placeholder project links with real repos and add screenshots.
2. Connect contact form to Formspree, Netlify Forms, or your backend endpoint.
3. Add a downloadable CV link once final.
4. Add real metrics for each project (latency, uptime, conversions, scale).
