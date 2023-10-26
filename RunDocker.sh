#!/bin/bash

# move to folder
cd "${0%/*}"

IMAGE=webneo
PORT=10000

# make the docker and run it
sudo docker buildx build -t $IMAGE .


if [ $1 = "-it" ]; 
then
    sudo docker run -p $PORT:3000 -it $IMAGE
else
    sudo docker run -p $PORT:3000 $IMAGE
fi
