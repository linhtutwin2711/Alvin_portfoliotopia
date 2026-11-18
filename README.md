# LHW: LEVEL UP (React version)

Alvin's portfolio, rebuilt with React + Vite. Same design as the HTML version.

## Run it on your computer

```
npm install
npm run dev
```

Open the address it shows (usually http://localhost:5173).

## Put it online

```
npm run build
```

This makes a `dist` folder. Upload the project to GitHub, then connect it to Vercel or Netlify:

- Build command: `npm run build`
- Output folder: `dist`
- Refreshing a page like `/projects` works because of `vercel.json` (Vercel) and `public/_redirects` (Netlify). Keep both files.

## Where things are

| What you want to change | File |
|---|---|
| Projects, links, credentials, skills, achievements | `src/data.js` |
| Colours and look | `src/style.css` |
| One page's words | `src/pages/` |
| Navbar, loading screen, stars, project cards | `src/components/` |
| Pages and addresses (routes) | `src/App.jsx` |
| Photos and logo | `public/images/` |

## Adding a link

Open `src/data.js` and paste your link between the quotes in `myLinks`.
