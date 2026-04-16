# Sugar Gliders

Single-page React app scaffolded with Vite and prepared for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new GitHub repository named `sugar-gliders`.
2. Add the remote:

   ```bash
   git remote add origin https://github.com/<your-username>/sugar-gliders.git
   ```

3. Push the main branch:

   ```bash
   git branch -M main
   git add .
   git commit -m "Initial React app"
   git push -u origin main
   ```

4. Publish the site:

   ```bash
   npm run deploy
   ```

5. In the GitHub repository settings, set GitHub Pages to deploy from the `gh-pages` branch if it is not picked automatically.

## Notes

- The Vite base path is set to `./` so the site works on GitHub Pages without hardcoding a username.
- If you rename the repository or add client-side routing later, revisit the deployment setup.
