#!/bin/bash

echo "🚀 Pushing Humza's Portfolio to GitHub..."
echo "Repository: https://github.com/humzaakhalid12-cloud/Humza-s-Portfolio.git"
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Initializing..."
    git init
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add clean portfolio website with dark/light mode, animations, and responsive design"

# Set remote URL
echo "🔗 Setting remote URL..."
git remote set-url origin https://github.com/humzaakhalid12-cloud/Humza-s-Portfolio.git

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
echo "⚠️  You may need to authenticate with GitHub credentials"
echo ""

git push -u origin main

echo ""
echo "✅ Portfolio pushed successfully!"
echo "🌐 View your portfolio at: https://github.com/humzaakhalid12-cloud/Humza-s-Portfolio"
