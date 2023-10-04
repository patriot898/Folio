# Folio ### Personal Portfolio Website

## Updating the Website

- Ensure bundle is compiled with newest updates (npm run compile)
- Run dockerbuild.bash to update and push the dockerimage ***ENSURE .ENV PUBLIC DIRECTORY SET TO /src/app/client/public ***
- Log into EC2
- For first launch: log in to Docker, pull the image file, then run a new container with name folioapp on port 80 connected to exposed Docker port 3000
- Run relaunch.bash after uploading to home directory in host instance to relaunch after updating the base image locally

## Running locally

- Ensure bundle is compiled with newest updates
- Execute  `npm run build` to update the main bundle (may need to use most updated node version using `nvm use node`)
- Execute `npm run compile-server` to update the server index file's babel-compiled output
- Execute `npm run start-dev` to start server
