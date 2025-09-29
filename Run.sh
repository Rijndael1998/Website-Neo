#!/usr/bin/env bash

# Move to folder of the script
cd "$(dirname "${BASH_SOURCE[0]}")"/

# Making sure repo is clean
git fetch --all
git reset --hard origin/main
git pull

# Reinit submodules
git submodule init
git submodule update --recursive --remote

# Install deps
yarn install

# build server version
rm -vr .next
yarn run build
PORT=10000 yarn run start
