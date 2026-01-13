# Use the official Node base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the dependencies file to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port on which the server will run
EXPOSE 8001

# Set the command to run the server
CMD ["yarn", "start"]