# My Pocket project

A simple and scalable **personal finance backend API** built with **Node.js and Express**.

The goal of this project is to evolve from a clean MVP into a robust financial system, starting with core concepts like **Categories, Transactions and Budgets**, following good backend architecture practices.

This project starts intentionally **without TypeScript** to reduce friction, but it is fully structured to allow an easy migration to TypeScript later.

---

## 🚀 Tech Stack

- Node.js
- Express
- JavaScript (CommonJS)
- dotenv
- nodemon (development)

---

## 🧠 Architecture Principles

This API follows a **layered architecture**:

- **Routes** → HTTP mapping only
- **Controllers** → Request / Response handling
- **Services** → Business rules and validations
- **Repositories** → Data access layer

This separation keeps the codebase:

- Easy to maintain
- Easy to test
- Easy to migrate to TypeScript
- Easy to scale

---

## 📁 Project Structure

```
src/
├── app.js              # Express app configuration
├── server.js           # Server entry point
│
├── routes/             # Route definitions
├── controllers/        # HTTP controllers
├── services/           # Business logic
├── repositories/       # Data access layer
├── middlewares/        # Middlewares (auth, errors)
├── config/             # Environment & database config
└── utils/              # Shared utilities
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd finance-app-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file at the project root:

```env
PORT=3000
```

---

## ▶️ Running the project

### Development mode

```bash
npm run dev
```

The server will start at:

```
http://localhost:3000
```

---

## ✅ Health Check

Test if the API is running:

```
GET /api/health
```

Expected response:

```json
{ "status": "I'm live!" }
```

---

## 🧩 Current Progress

### ✔ Completed

- Project setup
- Express server configuration
- Environment variables
- Base folder structure
- Health check endpoint

### 🔄 In Progress

- Category module (CRUD)

### ⏭ Next Steps

- Categories CRUD
- Transactions CRUD
- Budget model and logic
- Authentication (JWT)
- Database integration (PostgreSQL + Prisma)
- Dashboard aggregation endpoints

---

## 🧭 Long-Term Vision

This API is designed to support:

- Monthly budgeting
- Category-based expense tracking
- Financial summaries and insights
- Future frontend (Web)

The focus is **clarity, control and scalability**.

---

## 📌 Notes

- No data is persisted yet (in-memory/mock repository)
- No authentication implemented (temporary mock)
- No frontend included

All of these will be added incrementally.

## 👤 Author

Made by [Pedro Alano](https://github.com/pedroalano)
