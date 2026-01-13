# Anythink Market

Anythink Market is a simple Express server application that listens on port 8001. This project is designed to demonstrate a basic setup for an Express server with automatic code reloading using nodemon.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Wilcolab/Anythink-Market-6i999vwx.git
   cd Anythink-Market-6i999vwx
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

### Running the Server

To run the server with automatic code reloading, use the following command:

```bash
yarn start
```

The server will start and listen on port 8001.

### Building the Docker Image

To build the Docker image for the Express server, run:

```bash
docker build -t anythink-market .
```

### Running the Docker Container

After building the image, you can run the Docker container with:

```bash
docker run -p 8001:8001 anythink-market
```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.