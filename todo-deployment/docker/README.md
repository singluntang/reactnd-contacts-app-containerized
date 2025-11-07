# contact list Microservice

contact list is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to add and delete contacts, post todo to the feed.

## Tasks

### Setup Docker Environment
You'll need to install docker https://docs.docker.com/install/. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`

