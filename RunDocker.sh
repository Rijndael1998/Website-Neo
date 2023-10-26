#!/bin/bash

# move to folder
cd "${0%/*}"

# make the docker and run it
sudo docker buildx build -t nextjs-docker .

if [ $1 = "-it" ]; 
then
    sudo docker run -p 10000:3000 -it nextjs-docker
else
    sudo docker run -p 10000:3000 nextjs-docker
fi
