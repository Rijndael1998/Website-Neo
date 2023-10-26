#!/bin/bash

# move to folder
cd "${0%/*}"

# making sure repo is clean
git fetch --all
git reset --hard origin/main

./RunDocker.sh