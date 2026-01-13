# Use the official Node base image
FROM node:14

# Set the working directory in the container
WORKDIR /src/app

# Copy the dependencies file to the working directory
COPY package*.json /src/app

# Install the dependencies
RUN yarn install

# Expose the port on which the server will run
EXPOSE 8001

# Set the command to run the server
CMD ["yarn", "start"]