#!/usr/bin/env bash

# Move to folder of the script
cd "$(dirname "${BASH_SOURCE[0]}")"/
echo "current wd"
pwd

# Making sure repo is clean
echo "resetting git" 
git fetch --all
git reset --hard origin/main
git pull

# Reinit submodules
echo "resetting submodule"
git submodule init
git submodule update --recursive --remote

# Install deps
echo "yarn install"
yarn install

# build server version
echo "deleting build and remaking it"
rm -vr .next
yarn run build

echo "running server"
PORT=10000 yarn run start
