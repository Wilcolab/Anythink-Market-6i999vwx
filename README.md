# Anythink Market

This project contains two servers: a FastAPI server implemented in Python and an Express server implemented in Node.js. They provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with routes for managing tasks. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `node-server/anythink-market/src/server.js`: This file contains the implementation of the Express server with routes for managing tasks.

- `node-server/anythink-market/package.json`: This file lists the dependencies and scripts for the Node.js server.

- `node-server/anythink-market/Dockerfile`: This file is used to build a Docker image for the Express server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run (both Python and Node.js servers), their configurations, and any dependencies between them.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for both the FastAPI and Express servers and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access it at port `8000`. The Express server will be running at port `8001`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

The Express server provides similar routes for managing tasks.
