# RealTimeHub 🚀

A real-time communication project built with **Node.js, WebSockets, and Redis**, designed to explore low-latency messaging, event-driven communication, and backend infrastructure.

## 📌 Overview

RealTimeHub is a backend project focused on real-time communication between clients and a Node.js server. It uses WebSockets for persistent, bidirectional communication and Redis as a supporting service for real-time application development.

The project also uses Docker Compose to simplify running Redis locally.

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime for the server.
- **WebSockets (`ws`)** — Bidirectional communication between clients and the server.
- **Redis** — In-memory data store for supporting real-time functionality.
- **Docker & Docker Compose** — Containerized Redis setup.
- **Git & GitHub** — Version control and source code management.

## ✨ Key Concepts

- Establishing WebSocket connections between clients and the server.
- Sending and receiving messages in real time.
- Handling JSON messages between clients and the backend.
- Configuring the server using environment variables.
- Running Redis locally using Docker Compose.
- Managing Node.js dependencies with npm.

## 📂 Project Structure

```text
RealTimeHub/
├── node_modules/        # Installed dependencies (ignored by Git)
├── server.js            # Node.js server
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Locked dependency versions
├── docker-compose.yml   # Redis service configuration
├── .gitignore           # Files excluded from Git
└── README.md            # Project documentation
```

## ⚙️ Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

Docker Desktop must be running before starting the Redis container.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abinas1/RealTimeHub.git
cd RealTimeHub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start Redis using Docker Compose

```bash
docker compose up -d
```

This starts the Redis service configured in `docker-compose.yml` and maps port `6379` on your machine to port `6379` in the container.

Verify the container status:

```bash
docker compose ps
```

### 4. Start the Node.js server

On Windows Command Prompt:

```cmd
set PORT=9000 && node server.js
```

On Linux or macOS:

```bash
PORT=9000 node server.js
```

The server should start on the configured port, provided `server.js` reads `process.env.PORT` and uses that port when listening.

### 5. Test the application

Once the server is running, connect using a WebSocket client to the WebSocket endpoint configured in `server.js`.

For example, if the server listens on port `9000` and accepts WebSocket connections at its root path:

```text
ws://localhost:9000
```

The exact endpoint depends on the server implementation.

## 🐳 Docker Commands

Start the Redis container:

```bash
docker compose up -d
```

Check running services:

```bash
docker compose ps
```

View Redis logs:

```bash
docker compose logs redis
```

Stop the services:

```bash
docker compose down
```

## 🔐 Git Ignore

The project excludes generated dependencies and local environment configuration from version control.

```gitignore
node_modules/
.env
*.log
```

The `package.json` and `package-lock.json` files should be committed so dependencies can be installed consistently.

## 🎯 Learning Objectives

This project is intended to strengthen practical understanding of:

- Node.js server development.
- WebSocket communication and connection lifecycle.
- Event-driven programming.
- Redis integration.
- Docker-based development environments.
- Environment variable configuration.
- Git workflows and GitHub repository management.

## 🔮 Future Improvements

- Implement Redis Pub/Sub for message distribution.
- Support multiple WebSocket server instances.
- Add client connection tracking and presence management.
- Implement robust error handling and reconnection strategies.
- Add structured logging and automated tests.
- Add authentication and message validation.

## 👨‍💻 Author

**Abinas Behera**

GitHub: [@Abinas1](https://github.com/Abinas1)

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you intend to distribute or allow others to reuse this project.
