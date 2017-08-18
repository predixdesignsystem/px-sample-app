#!/bin/bash

# Exit with nonzero exit code if anything fails
set -e

# ------------------------------------------------------------------------------
# CONFIGURE SCRIPT
# ------------------------------------------------------------------------------

# Set our source branch (where we'll build from) and our target branch (where we
# want to send the build page to)
SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
REPO=`git config remote.origin.url`

# Find out our repo name from the bower file
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//' | sed -e 's/^[[:space:]]*//')
echo "repo name is $REPO_NAME"

# We get the URL in this format: "https://github.com/PredixDev/px-something"
# First, we need to replace https-style remote URL with a SSH-style remote
# URL we can push to below
SSH_GIT=${REPO/https:\/\/github.com\//git@github.com:}

# Now, the URL is in this format: "git@github.com:PredixDev/px-something"
# Next, replace `PredixDev` Github organization with `predix-ui` so configure
# the correct remote to push to.
# The resulting URL will be: "git@github.com:predix-ui/px-something"
SSH_GIT_PREDIXUI=${SSH_GIT/:PredixDev\//:predix-ui\/}

# Prep git credentials
GIT_USER_NAME="Travis CI"
GIT_USER_EMAIL="PredixtravisCI@ge.com"
GIT_COMMIT_MESSAGE="[Travis] Rebuild documentation (commit: $TRAVIS_COMMIT)"

# Set git credentials
git config user.name $GIT_USER_NAME
git config user.email $GIT_USER_EMAIL

# ------------------------------------------------------------------------------
# CHECK IF BUILD SHOULD RUN
# ------------------------------------------------------------------------------

# Check if this CI run should run a deploy. We should only deploy if this CI run
# is not a pull request and if this CI run is from the master branch.
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi

# ------------------------------------------------------------------------------
# BUILD
# ------------------------------------------------------------------------------

# Ensure we're in the build directory
cd $TRAVIS_BUILD_DIR

# Bower install theme dependencies
./node_modules/.bin/bower install px-theme px-dark-theme px-dark-demo-theme

# Run polymer build to transpile code. The output will be placed in the
# `build/unbundled` directory
./node_modules/.bin/polymer build

# ------------------------------------------------------------------------------
# MOVE FILES TO PREP FOR DEPLOY
# ------------------------------------------------------------------------------

# Open the build directory
cd build/default

# Make sure the deploy key and node modules aren't checked into the build
touch .gitignore
echo "deploy_key" >> .gitignore
echo "node_modules/" >> .gitignore
echo "leaflet/docs/*" >> .gitignore

# ------------------------------------------------------------------------------
# GIT PUSH TO REMOTES
# ------------------------------------------------------------------------------

# Initialize a fresh git repo in this subdirectory we'll commit to
git init .

# Checkout a new orphan brach to build on
git checkout --orphan $TARGET_BRANCH

# Add and commit changes
git add -A . >/dev/null
echo "git add done"
git commit -m "${GIT_COMMIT_MESSAGE}" >/dev/null
echo "git commit done"

# Prep the ssh key we'll use to deploy
eval `ssh-agent -s`
chmod 0400 $TRAVIS_BUILD_DIR/deploy_key

# Push to predix-ui/repo `gh-pages` branch (force to override out-of-date refs)
ssh-add $TRAVIS_BUILD_DIR/deploy_key
git push $SSH_GIT_PREDIXUI $TARGET_BRANCH --force

# Wait for Github Pages to rebuild and drop the cloudflare cache
sleep 120s
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/${cloudflare_zone_identifier}/purge_cache" -H "X-Auth-Email: martin.wragg@ge.com" -H "X-Auth-Key: ${cloudflare}" -H "Content-Type: application/json" --data '{"purge_everything":true}'
