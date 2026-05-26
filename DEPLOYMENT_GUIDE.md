# Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

## Automatic Deployment (Recommended)

Your repository is configured with GitHub Actions. Simply push to main and it will deploy automatically:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The deployment workflow will:
1. Build your React + Vite project
2. Deploy to GitHub Pages automatically
3. Your site will be live at: https://mageshwarigowri.github.io/my-website/

## Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies (first time only)
npm install

# Deploy
npm run deploy
```

This will:
1. Build the production bundle
2. Push to the `gh-pages` branch
3. GitHub Pages will serve your site

## Verify Deployment

1. Go to your repository settings: https://github.com/mageshwarigowri/my-website/settings/pages
2. Confirm that:
   - Source is set to "Deploy from a branch"
   - Branch is set to `gh-pages`
   - Folder is set to `/ (root)`

## Access Your Portfolio

Your portfolio will be available at:
**https://mageshwarigowri.github.io/my-website/**

(Note: It may take 2-3 minutes after first deployment for GitHub Pages to process)

## Troubleshooting

- **Blank page?** Check that `base: '/my-website/'` is in `vite.config.js`
- **Assets not loading?** Clear browser cache and hard refresh (Ctrl+Shift+R)
- **Still not working?** Check GitHub Actions workflow status in your repository

## Custom Domain (Optional)

To use a custom domain:
1. Go to Settings → Pages
2. Add your custom domain
3. Follow DNS configuration steps
