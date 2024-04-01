# add commits to git hub and deploy to firebase

# Add all files to git
git add .
git commit -m "added assets page"
git push

# Deploy to firebase
npm run build && firebase deploy