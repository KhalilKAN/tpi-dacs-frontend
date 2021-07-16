#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:KhalilKAN/tpi-dacs-frontend.git main:gh-pages


cd -