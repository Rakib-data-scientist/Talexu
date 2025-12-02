# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Configure GitHub Pages Settings
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - The workflow will handle everything else automatically

### Step 2: Update Vite Config (if using project repo)
If deploying to `https://username.github.io/repo-name`, update `vite.config.ts`:

```typescript
export default defineConfig({
  // ... other config
  base: '/repo-name/', // Replace 'repo-name' with your repository name
});
```

If deploying to `https://username.github.io`, keep `base: '/'` (default).

### Step 3: Push Your Code
```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Step 4: Monitor Deployment
1. Go to **Actions** tab in your GitHub repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once done, your site will be live at:
   - `https://username.github.io/repo-name` (project repo)
   - `https://username.github.io` (if using username.github.io repo)

## What the Workflow Does

✅ Installs dependencies  
✅ Builds your React + Vite project  
✅ Deploys built files to GitHub Pages  
✅ Runs automatically on every push to `main` branch  

## Troubleshooting

**Pages not appearing?**
- Wait 1-2 minutes and refresh
- Check Actions tab for any errors
- Verify GitHub Pages settings are correct

**Site looks broken?**
- Check if you set the correct `base` path in vite.config.ts
- Clear browser cache (Ctrl+Shift+Delete)

**Custom domain?**
- Add `CNAME` file with your domain in the `dist/` folder
- Or configure custom domain in GitHub Pages settings

## Next Steps

Your site is now deployed! Every time you:
- `git push` to main
- GitHub Actions automatically builds and deploys
- Your site updates within minutes

Enjoy! 🚀
