#!/bin/bash
# GitHub Pages Deploy Script
set -e

echo "Building Terminal of Truths site..."
rm -rf dist
mkdir dist
cp -r * dist/
cd dist
rm -rf bots smart-contracts node_modules .git*

echo "Initializing Git repo..."
git init
git checkout -b main
git add .
git commit -m '🚀 Deploy TRUTH to GitHub Pages'

echo "Setting remote origin..."
git remote add origin https://github.com/YOUR_USERNAME/terminal-of-truths.git

echo "Pushing to GitHub Pages..."
git push -f origin main

echo "Deployment complete! 🎉"
