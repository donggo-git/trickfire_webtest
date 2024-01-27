set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:donggo-git/trickfire_webtest.git main:gh-pages

cd -