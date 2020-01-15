# build
npm run build

# navigate into the build output directory
cd d:/workspace/vue/vue-cli-github/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'BLD:Add new version'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/dc2348/dc2348.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/dc2348/dc2348.github.io.git master:gh-pages

cd ..