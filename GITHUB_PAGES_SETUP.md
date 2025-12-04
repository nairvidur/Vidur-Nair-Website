# GitHub Pages Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `vidur-nair-website` or `your-username.github.io` for a custom domain)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote (replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main if needed (GitHub uses 'main' by default)
git branch -M main

# Push your code
git push -u origin main
```

**OR if your branch is already named 'master':**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin master
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (this will appear after you push)
5. The site will automatically deploy when you push to the main/master branch

## Step 4: Access Your Website

After the GitHub Actions workflow completes (usually 2-3 minutes):
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- If you named your repo `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io/`

## Important Notes

- The GitHub Actions workflow will automatically build and deploy your site on every push
- If your repository name is NOT `your-username.github.io`, you may need to update `next.config.js`:
  - Uncomment and set: `basePath: '/your-repo-name'`
  - Uncomment: `trailingSlash: true`
- The first deployment may take a few minutes
- You can check deployment status in the **Actions** tab of your repository

## Troubleshooting

- If the site doesn't load, check the **Actions** tab for any build errors
- Make sure `output: 'export'` is set in `next.config.js` (already configured)
- Ensure all dependencies are in `package.json` (they are)

