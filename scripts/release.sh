#!/bin/bash

# VER=`node -p "require('./package.json').version"`
#
# git config --local user.email "action@github.com"
# git config --local user.name "GitHub Action"
# git commit -a -m "Auto Release v${VER}"
# git tag "v${VER}" HEAD

echo $GITHUB_TOKEN
echo $env.GITHUB_TOKEN
echo $TEST
echo $env.TEST
echo $process.env.GITHUB_TOKEN
echo $process.env.TEST
#
# remote_repo="https://${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}@github.com/${REPOSITORY}.git"
#
# git push "${remote_repo}" \
#   HEAD:master \
#   --follow-tags \
#   --tags