#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io
git push -f git@github.com:cesnakas/cesnakas.github.io.git gh-pages:main

# https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
