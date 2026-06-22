# Nareman Abdallah — Portfolio

Personal portfolio built with **React + Vite** using CSS Modules for scoped styling.

## Tech Stack

- React 18
- Vite 5
- CSS Modules (zero external CSS libraries)

## Project Structure

```
src/
├── components/
│   ├── Navbar/        # Sticky top navigation
│   ├── Hero/          # Landing section with stats
│   ├── About/         # Short bio card
│   ├── Skills/        # Filterable skills grid
│   ├── Experience/    # Timeline of work & education
│   ├── Projects/      # Project cards grid
│   ├── Contact/       # Contact links section
│   └── Footer/        # Footer
├── data/
│   └── portfolioData.js   # ← Edit all your content here
├── styles/
│   └── globals.css        # CSS variables & base reset
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Customization

All content lives in **`src/data/portfolioData.js`** — edit that single file to update your name, projects, skills, experience, and links. No other files need to change.

## Deploy to GitHub Pages

1. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `vite.config.js`:
   ```js
   base: '/nareman-portfolio/',   // replace with your repo name
   ```

3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Run:
   ```bash
   npm run deploy
   ```

Your portfolio will be live at `https://<your-username>.github.io/nareman-portfolio/`
