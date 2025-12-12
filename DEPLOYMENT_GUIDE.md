# Deployment Guide for Wellness by Mariea Website

## Step 1: Configure Git (if not already done)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Commit Your Changes
```powershell
cd "c:\Users\simme\Documents\mycodei\mums proj"
git commit -m "Fix navigation links and remove parallax effect"
```

## Step 3: Push to GitHub
```powershell
git push origin main
```

## Step 4: Deploy to GitHub Pages

### Option A: Using GitHub Website (Easiest)
1. Go to your repository: https://github.com/codesim21/mums-proj
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://codesim21.github.io/mums-proj/`

### Option B: Using GitHub CLI (if installed)
```powershell
gh repo view codesim21/mums-proj --web
# Then follow the Settings > Pages steps above
```

## Step 5: Update Links (if needed)
If your site is at `https://codesim21.github.io/mums-proj/`, make sure all your internal links work correctly. They should already work since you're using relative paths like `index.html`, `beauty.html`, etc.

## Future Updates
Whenever you make changes:
1. `git add .` (stage changes)
2. `git commit -m "Your commit message"`
3. `git push origin main`
4. GitHub Pages will automatically update (may take 1-2 minutes)

## Alternative: Deploy to Netlify or Vercel
If you prefer a different hosting service:

### Netlify:
1. Go to https://netlify.com
2. Sign up/login
3. Drag and drop your project folder, OR
4. Connect your GitHub repository for automatic deployments

### Vercel:
1. Go to https://vercel.com
2. Sign up/login
3. Import your GitHub repository
4. Deploy automatically




