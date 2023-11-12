#!/bin/bash

# move to folder
cd "${0%/*}"

# making sure repo is clean
git fetch --all
git reset --hard origin/main

yarn install
yarn run build
PORT=10000 yarn run serve
