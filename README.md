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

### 1. Run Locally

#### Backend (Go)

1. Make sure you have [Go](https://go.dev/doc/install]), [Node.js](https://nodejs.org/), and [Redis](https://redis.io/) installed
2. Clone this repo and cd into project folder
3. Start redis using:
      ```
      redis-server & check server is active with redis-server cli should return PONG
4. Run:
   ```sh
   go run main.go
   ```
5. The server will start on `http://localhost:9808`


#### Frontend
1. cd frontend

2. npm install

3. npm start

## Credits
- Built by Devansh Jain
- UI inspired by SafetyKit and modern SaaS design

---

Feel free to fork, modify, and use for your own projects! 

