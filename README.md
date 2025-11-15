# Lock-In API

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-red?style=for-the-badge&logo=typeorm&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

This repository contains the source code for a modern backend API built with **Node.js** and **TypeScript**, focused on **authentication**, **role-based access**, and **user management**.  
The project follows clean modular architecture with controllers, services, repositories, and entities for scalability and clarity.

---

## 📜 About the Project

The **Lock-In API** provides a solid foundation for authentication-based applications.  
It includes:

- Secure login with **JWT**  
- Role-based access control (**RBAC**)  
- **HTTP-only cookies** for session protection  
- Full integration with **TypeORM** and relational databases  

---

## Key Features

* **JWT Authentication**
* **Role-Based Access Control (RBAC)**
* **CRUD for Users and Profiles**
* **Secure HTTP-only Cookies**
* **Modular Architecture**
* **TypeORM Integration**

---

## Tech Stack

* **Node.js**
* **TypeScript**
* **Express**
* **TypeORM**
* **MySQL / PostgreSQL**
* **bcryptjs**
* **jsonwebtoken**
* **cookie-parser**
* **CORS**
* **Reflect-metadata**
* **ts-node-dev**

---

## Running the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/lock-in-api.git
cd lock-in-api
```

### 2. Install dependencies
```bash
yarn install
```

### 3. Environment Variables
Create a `.env` file at the root:

```
JWT_SECRET=super-secret-lockin
COOKIE_NAME=auth
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_NAME=lockin
```

### 4. Run migrations
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

API will be available at:
```
http://localhost:3000
```

---

## 🔑 Environment Variables

| Variable | Description |
|-----------|--------------|
| `JWT_SECRET` | JWT signing key |
| `COOKIE_NAME` | Cookie identifier |
| `DB_TYPE` | Database type |
| `DB_HOST` | Database host |
| `DB_PORT` | Database port |
| `DB_USER` | Database username |
| `DB_PASS` | Database password |
| `DB_NAME` | Database name |

---

## 👤 Author

Developed by **Mauro Junior**  
Project: **Lock-In API**  
Stack: Node.js · TypeScript · Express · TypeORM · MySQL  

---

> _Built with clarity, modularity, and performance in mind._
