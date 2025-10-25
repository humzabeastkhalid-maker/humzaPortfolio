#!/bin/bash

echo "🔐 GitHub Authentication & Portfolio Push"
echo "=========================================="
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Initializing..."
    git init
fi

echo "📁 Adding all portfolio files..."
git add .

echo "💾 Committing changes..."
git commit -m "Add complete portfolio website with HTML, CSS, JS and profile photo"

echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/humzabeastkhalid-maker/humzaPortfolio.git

echo ""
echo "🔐 AUTHENTICATION REQUIRED"
echo "=========================="
echo "To push to GitHub, you need to authenticate:"
echo ""
echo "Option 1: Use Personal Access Token"
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Click 'Generate new token (classic)'"
echo "3. Give it a name: 'Portfolio Push'"
echo "4. Select scope: 'repo'"
echo "5. Copy the token"
echo "6. Run: git remote set-url origin https://YOUR_TOKEN@github.com/humzabeastkhalid-maker/humzaPortfolio.git"
echo "7. Run: git push -u origin main"
echo ""
echo "Option 2: Use GitHub CLI"
echo "1. Install: brew install gh"
echo "2. Authenticate: gh auth login"
echo "3. Push: git push -u origin main"
echo ""
echo "Option 3: Manual Upload"
echo "1. Go to: https://github.com/humzabeastkhalid-maker/humzaPortfolio"
echo "2. Click 'uploading an existing file'"
echo "3. Upload: index.html, styles.css, script.js, Humza.jpeg, README.md"
echo ""

echo "✅ Your portfolio files are ready to push!"
echo "📁 Files included:"
ls -la *.html *.css *.js *.jpeg *.md 2>/dev/null || echo "   - index.html"
echo "   - styles.css" 
echo "   - script.js"
echo "   - Humza.jpeg"
echo "   - README.md"
echo ""
echo "🌐 Repository: https://github.com/humzabeastkhalid-maker/humzaPortfolio"
