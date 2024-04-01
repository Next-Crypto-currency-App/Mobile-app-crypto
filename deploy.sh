# add commits to git hub and deploy to firebase

# Add all files to git
git add .
git commit -m "updated light mode dark mode"
git push

# Deploy to firebase
npm run build && firebase deploy