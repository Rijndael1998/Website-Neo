#!/usr/bin/env bash

# Move to folder of the script
cd "${0%/*}"

# Making sure repo is clean
git fetch --all
git reset --hard origin/main
git pull

# Reinit submodules
git submodule init
git submodule update --recursive --remote

# Install deps
yarn install
yarn run build
PORT=10000 yarn run start
