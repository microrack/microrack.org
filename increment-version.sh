#!/bin/bash

echo "Enter version type (patch, minor, major):"
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
git commit -m "chore(release): bump version to $(jq -r '.version' package.json)"
