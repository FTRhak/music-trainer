#! /bin/sh

set -e

git clone "https://github.com/FTRhak/music-trainer.git" .music-trainer-master
cd .music-trainer-master
npm install
npm run build:prod
git checkout master
rm -rf *.ico *.html *.js *.css *.txt assets
mv dist/music-trainer/browser/* .
git add --all
git commit -m "Refreshed gh-pages from master"
git show --stat

read -p "Confirm publication? [yn] " -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo
    git push origin gh-pages

fi
echo

cd ..
rm -rf .music-trainer-master