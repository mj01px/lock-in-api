# Lock-In API

A clean, production-ready backend service built with **Node.js** and **TypeScript**, designed for authentication, role-based access, and user management.

Lock-In API emphasizes **security**, **scalability**, and **code clarity**, following a modular architecture that cleanly separates responsibilities into controllers, services, repositories, and entities.

---

## Introduction

Lock-In API provides a full backend foundation for authentication-driven applications.  
It includes everything from **JWT-based authentication** and **role verification** to **cookie sessions** and **database persistence**.

This project was built to be lightweight, extensible, and easy to integrate with any frontend or mobile app.

---

## Table of Contents
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Architecture](#architecture)  
4. [Setup Guide](#setup-guide)  
5. [Environment Variables](#environment-variables)  
6. [Author](#author)

---

## Overview

The API provides endpoints for:
- **User authentication** (login, logout, session validation)  
- **Role-based access control** (admin / user)  
- **CRUD operations** for both users and profiles  
- Secure **HTTP-only cookies** for token storage  
- Seamless integration with **TypeORM** and relational databases

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Language** | TypeScript |
| **Runtime** | Node.js |
| **Framework** | Express |
| **ORM** | TypeORM |
| **Database** | MySQL / PostgreSQL |
| **Authentication** | JSON Web Token (JWT), bcryptjs |
| **Utilities** | CORS, cookie-parser, reflect-metadata |
| **Dev Tools** | ts-node-dev, TypeScript, Yarn |

---

## Architecture

```
src/
 ├── config/          # Environment and CORS configuration
 ├── controllers/     # Handle HTTP requests and responses
 ├── database/        # TypeORM connection setup
 ├── entities/        # Database models
 ├── interfaces/      # Type definitions
 ├── middleware/      # Authentication and role guards
 ├── repositories/    # Data access layer
 ├── routes/          # API routes
 ├── services/        # Business logic
 └── server.ts        # Application entry point
```

The architecture follows a **Service-Repository pattern**:
- **Controller**: Receives requests, returns responses.  
- **Service**: Handles business logic.  
- **Repository**: Manages database operations.  
- **Entity**: Represents database models.  

---

## Setup Guide

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/lock-in-api.git
cd lock-in-api
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Configure the environment
Create a `.env` file at the root of your project:

```bash
JWT_SECRET=super-secret-lockin
COOKIE_NAME=auth
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_NAME=lockin
```

### 4. Run the database migrations
```bash
yarn typeorm migration:run
```

### 5. Start the server
**Development**
```bash
yarn dev
```

**Production**
```bash
yarn start
```

Once running, the API will be available at:
```
http://localhost:3000
```

---

## Environment Variables

| Variable | Description |
|-----------|--------------|
| `JWT_SECRET` | Secret key for signing JWTs |
| `COOKIE_NAME` | Cookie identifier for sessions |
| `DB_TYPE` | Database type |
| `DB_HOST` | Database host |
| `DB_PORT` | Database port |
| `DB_USER` | Database username |
| `DB_PASS` | Database password |
| `DB_NAME` | Database name |

---

## Author

Developed by **Mauro Junior**  
Project: **Lock-In API**  
Stack: Node.js · TypeScript · Express · TypeORM · MySQL  

---

> _Built with clarity, modularity, and performance in mind._
