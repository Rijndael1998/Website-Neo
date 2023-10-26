#!/bin/bash

# move to folder
cd "${0%/*}"

# make the docker and run it
sudo docker build -t nextjs-docker .
sudo docker run -p 3000:10000 -it nextjs-docker

