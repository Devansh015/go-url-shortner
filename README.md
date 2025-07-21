# URL Shortener

A modern, mobile-friendly URL shortener built with **Go (backend)**, **Redis (storage)**, and **React (frontend)**.

## ✨ Features

- 🔗 Shorten long URLs to easy-to-share short links
- 📱 Responsive, clean UI inspired by modern SaaS design
- 📋 Copy-to-clipboard button for short URLs
- ℹ️ Info popup explaining the app
- ⚡ Redis-based in-memory storage
- 🌐 CORS enabled for smooth deployment with static frontends

---

## 🚀 Getting Started

### 1. Prerequisites

- Make sure you have [Go](https://go.dev/doc/install]), [Node.js](https://nodejs.org/), and [Redis](https://redis.io/) installed

#### ✅ Installing Redis Locally

- **macOS**:
  ```sh
  brew install redis
  brew services start redis
  
### 2. Run Locally

#### Backend (Go
clone this repo and cd into project folder 

# Start Redis if not already running
redis-server & use redis-cli ping should return PONG if server is active

# Run the Go server
go run main.go

# Navigate to the frontend directory (if applicable)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start

## Credits
- Built by Devansh Jain
- UI inspired by SafetyKit and modern SaaS design

---

Feel free to fork, modify, and use for your own projects! 

