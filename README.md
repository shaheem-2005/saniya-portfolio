# Fieldnotes — Civil Engineering Portfolio

A futuristic, responsive portfolio starter for a third-year civil engineering student. Built with React, Vite, Three.js / React Three Fiber, and Framer Motion.

## Run in VS Code

1. Install **Node.js LTS** from https://nodejs.org/ and restart VS Code.
2. Extract this folder and open it in VS Code (`File → Open Folder`).
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Add her photo

Copy a portrait image into `public/` and name it **profile.jpg**. The About section automatically uses it. If you use PNG, change `/profile.jpg` to `/profile.png` in `src/App.jsx`.

## Personalize before publishing

Search the project for these placeholders and replace them:
- `[YOUR NAME]`
- `[YOUR CITY]`
- `your.email@example.com`
- LinkedIn and GitHub profile URLs
- Sample project descriptions and years
- Skills / software she genuinely knows

## Build check

```bash
npm run build
npm run preview
```

## Deploy free on Vercel

1. Create a GitHub repository and push this project.
2. Go to https://vercel.com/ and sign in with GitHub.
3. Choose **Add New → Project**, import the repository.
4. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. Future pushes to the connected branch redeploy automatically.

Alternative: Netlify works with build command `npm run build` and publish directory `dist`.

## Notes

- The 3D building is rendered live in the browser. On small screens it becomes more subtle to keep text readable.
- The skill bars are visual placeholders, not measured proficiency scores. Adjust/remove them to avoid implying inaccurate skill levels.
- This is a starter portfolio, not a claim that sample concepts are completed real projects.
