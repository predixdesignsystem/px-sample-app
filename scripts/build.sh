#!/bin/bash

# ------------------------------------------------------------------------------
# CREATES A LOCAL VERSION OF THE DEMO/DOCS BUILD
#
# The `scripts/ghp.sh` file is run by Travis CI to build the docs/demo pages and
# deploy those pages to by pushing to a special Github repo.
#
# This script has a small subset of the build steps. It can be used for fast
# local builds to simulate the production site. Alternatively, it can be used
# to create a local build that can be pushed to the docs site if a hotfix is
# needed and Travis is taking too long.
#
# CONFIGURING YOUR PROJECT:
#
# Your project should include at least the following files, in addition to any
# code for the project itself:
#
# project/
#  |- scripts/build.sh
#  |- node_modules/
#  |- bower_components/
#  |- bower.json
#  |- polymer.json
#  |- package.json
#
# package.json requirements:
# - `bower` and `polymer-cli` (1.3.0+) must be installed as devDependencies
#
# bower.json requirements:
# - the repo name must be in the "name" field
#
# polymer.json requirements:
# - the build must be configured, with all required sources listed
#
# Additionally, the `build/` directory should be empty and added to `.gitignore`
# to ensure nothing important is overwritten.
#
# HOW TO USE IT:
#
# These commands should be run from the root of your project.
#
# 1. This file should be saved in your project as `scripts/build.sh`.
# 2. Run `yarn install` or `npm install` (your choice)
# 3. Run `bower install`
# 4. Run `./scripts/build.sh`
# ------------------------------------------------------------------------------

# Find repo name from the bower file
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//' | sed -e 's/^[[:space:]]*//')

echo "Starting build for $REPO_NAME"

# Bower install theme dependencies
./node_modules/.bin/bower install px-theme px-dark-theme px-dark-demo-theme

# Run polymer build to transpile code. The output will be placed in the
# `build/unbundled` directory
./node_modules/.bin/polymer build

echo ""
echo "================================================"
echo "Build finished in $(pwd)"
echo "================================================"
echo ""
