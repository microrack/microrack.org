#!/bin/bash

# Check if the working directory is clean
if [[ -n $(git status --porcelain) ]]; then
  echo "Your Git working directory is not clean. Please commit or stash your changes before running this script."
  exit 1
fi

echo "Current version is $(node -p "require('./package.json').version"). Enter new changes type (patch, minor, major):"
read VERSION_TYPE

# Validate input
if [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" ]]; then
  echo "Invalid version type. Please enter 'patch', 'minor', or 'major'."
  exit 1
fi

# Increment version based on the user input
npm version $VERSION_TYPE

# Add the package.json and package-lock.json to the staging area
git add package.json package-lock.json

# Commit the version bump
git commit -m "chore(release): bump version to $(node -p "require('./package.json').version")"

echo "Version incremented to $(node -p "require('./package.json').version") succesfully."
